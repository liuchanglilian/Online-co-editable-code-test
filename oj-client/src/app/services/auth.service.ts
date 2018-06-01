import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
/*
@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '12OL6KExe4Rjoa6yBtiDum0ur6JbVKQ1',
    domain: 'liuchanglilian2.auth0.com',
    responseType: 'token id_token',
    audience: 'https://liuchanglilian2.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    console.log("I am doing login");
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken &&authResult.profile) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    console.log("I am now printing");
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('profile',JSON.stringify(authResult.profile));
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    console.log("is logged");
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log(new Date().getTime() < expiresAt);
    return new Date().getTime() < expiresAt;
  }
  public getProfile(): Object {
    return JSON.parse(localStorage.getItem("profile"));
  }*/
@Injectable()
export class AuthService {
  // Create Auth0 web auth instance
  auth0 = new auth0.WebAuth({
    clientID: '12OL6KExe4Rjoa6yBtiDum0ur6JbVKQ1',
    domain: 'liuchanglilian2.auth0.com',
    responseType: 'token id_token',
    audience: 'https://liuchanglilian2.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid profile nickname email user_metadata app_metadatas'
  });
  // Store authentication data
  userProfile: any;
  accessToken: string;
  authenticated: boolean;

  constructor(private router: Router,private http:Http) {
    // Check session to restore login if not expired
    if (Date.now() < JSON.parse(localStorage.getItem('expires_at'))) {
      this.getAccessToken();
    }

    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        console.log(authResult);
        window.location.hash = '';
        this.getUserInfo(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
      this.router.navigate(['/']);
    });
  }

  login() {
    // Auth0 authorize request
    this.auth0.authorize();
  }

  getAccessToken() {
    // this.auth0.checkSession({}, (err, authResult) => {
    //   if (authResult && authResult.accessToken) {
    //     this.getUserInfo(authResult);
    //   } else if (err) {
    //     console.log(err);
    //     this.logout();
    //     this.authenticated = false;
    //   }
    // });
  }

  getUserInfo(authResult) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this._setSession(authResult, profile);
      }
    });
  }

  private _setSession(authResult, profile) {
    const expTime = authResult.expiresIn * 1000 + Date.now();
    const idTokenPayload = authResult.idTokenPayload;
   // const app_metadata = authResult.idTokenPayload.;
    // Save authentication data and update login status subject
    localStorage.setItem('expires_at', JSON.stringify(expTime));
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('role',JSON.stringify(idTokenPayload["https://foo/bar/roles"][0]));
  console.log("hihihi,I am here");
  var url ='https://foo/bar/roles';
 // console.log(idTokenPayload);
   // localStorage.setItem('meta-data',JSON.stringify(app_metadata));
    //localStorage.setItem('id_token', id_token);
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this.authenticated = true;
  }

  logout() {
    // Remove auth data and update login status
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    localStorage.removeItem('role');
    this.userProfile = undefined;
    this.accessToken = undefined;
    this.authenticated = false;
  }

  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt && this.authenticated;
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  public admin():boolean{
    var role = localStorage.getItem('role');
    if(role!='') {
      var roleName = JSON.parse(role);
      console.log("checking in auth for the role" + roleName);
      return roleName === 'Admin';
    }
  }

  public getProfile(): any {
    return JSON.parse(localStorage.getItem("profile"));
    //return this.userProfile;
  }
  public resetPassword(): void{
    let profile = this.getProfile();
  //   let url: string ='https://liuchanglilian2.auth0.com/dbconnections/change_password';
  //   let headers = new Headers();
  //   headers.append('Accept', 'application/json');
  //   let options = new RequestOptions({headers:headers});
  //   let body = {
  //       client_id: 'kntUt0uiU47somIW28yVrQM1KWRejyU5',
  //    // this.auth.getProfile().nickname
  //     email: this.userProfile.email,
  //     connection: 'Username-Password-Authentication',
  //     json:true
  //
  // }
  //  this.http.post(url,body,options)
  //        .toPromise()
  //     .then((res:Response) =>{
  //       console.log(res.json());
  //     })
  //     .catch(this.handleError);
    this.auth0.changePassword({
      connection:'Username-Password-Authentication',
      email:this.getProfile().email

    }, function(err:any,resp){
      if(err){
        console.log(err.message);
      }else{
        console.log(resp);
      }
    });

  }
  private handleError(error:any): Promise<any>{
    console.error('error occur',error);
    return Promise.reject(error.message||error);

  }
/*  var request = require("request");

  var options = {
    method: 'POST',
    url: 'https://liuchanglilian2.auth0.com/dbconnections/change_password',
    headers: {'content-type': 'application/json'},
    body:
      {
        client_id: 'kntUt0uiU47somIW28yVrQM1KWRejyU5',
        email: '',
        connection: 'Username-Password-Authentication'
      },
    json: true
  };
*/


}
