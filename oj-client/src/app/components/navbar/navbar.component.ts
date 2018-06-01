import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import { FormControl} from "@angular/forms";
import{ Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = 'COJ';
  username: string = "";
  searchBox: FormControl = new FormControl();
  subscription: Subscription;
  constructor(@Inject('auth') private auth,
              @Inject('input') private input,
             private router: Router) {

  }

  ngOnInit() {
    console.log("I am here");
    /* if(this.auth.authenticated()){
       this.username = this.auth.getProfile().nickname;
       }*/
    if (this.auth.isAuthenticated()) {
      console.log("hihihi");
      this.username = this.auth.getProfile().nickname;
      console.log("nick name" + this.username);

    } else {
      console.log("not authenticated");
    }
    this.subscription = this.searchBox
      .valueChanges
      .debounceTime(1000)
      .subscribe(
        term=>
        {
          this.input.changeInput(term);
    }
      )

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  searchProblem(){
    this.router.navigate(['/problems']);
  }
 getUsername(): string{
    if(this.auth.isAuthenticated())
    {
      return  this.auth.getProfile().nickname;
    }
    return null;
 }
  login(): void {
    console.log("I am logging");
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }

}
