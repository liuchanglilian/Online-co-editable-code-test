import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS} from '../mock-problems';
import { Http, Response, Headers,RequestOptions} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  private _problemSource = new BehaviorSubject<Problem[]>([]);
  constructor(private http:Http) { }

  //the difference between observable and promise: the value of promise cannot be changed after
  //resolved regardless of what may be got from the request afterwards.
  //Observable: a serious of values, the value can change consistently.
  getProblems(): Observable<Problem[]> {
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res: Response)=>{
        this._problemSource.next(res.json());
      })
      .catch(this.handleError);
    return this._problemSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
   return this.http.get(`api/v1/problems/${id}` )
    //return this.http.get('api/v1/problems/1')
      .toPromise()
      .then((res: Response) => res.json())
      .catch(this.handleError);

  }
  addProblem(problem: Problem): Promise<Problem>{
    let headers = new Headers();
    //add the header to make the server know that the data will be in type of json
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers:headers});
    return this.http.post('/api/v1/problems',problem,options)
        .toPromise()
        .then((res:Response)=>{
          this.getProblems();
          //After adding new problem, the page will change
          return res.json();
        })
        .catch(this.handleError);
  }

  buildAndRun(data): Promise<Object>{
    let headers = new Headers();
    //localStorage.setItem('data',JSON.stringify (data));
    //console.log("printing in data"+data);
    //add the header to make the server know that the data will be in type of json
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers:headers});
    return this.http.post('/api/v1/build_and_run',data,options)
      .toPromise()
      .then((res:Response)=>{
      //  console.log(JSON.stringify(res.json()));
        //After adding new problem, the page will change
        return res.json();
      })
      .catch(this.handleError);

  }

  //error handler
  private handleError(error:any): Promise<any>{
    console.error('An error occurred',error);
    return Promise.reject(error.body||error);
  }

}
