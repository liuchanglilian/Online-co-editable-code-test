import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string = '';
  nickname: string = '';
  constructor(@Inject('auth') private auth) { }

  ngOnInit() {
    let profile = this.auth.getProfile();

    this.email = profile.email;
    console.log("email:"+this.email);
    this.nickname = profile.nickname;
    console.log("username:"+this.nickname);
  }
  resetPassword() {
    this.auth.resetPassword();
  }

}
