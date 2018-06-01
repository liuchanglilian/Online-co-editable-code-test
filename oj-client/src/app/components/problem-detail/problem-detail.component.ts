import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem: Problem;


  constructor(private route: ActivatedRoute,
              @Inject('data') private data,
              ) {
}

  ngOnInit() {
    // once the url change, then this function is called
    this.route.params.subscribe(params => {
      this.data.getProblem(+params['id'])
        .then(problem => this.problem = problem);

    });
  }

}
