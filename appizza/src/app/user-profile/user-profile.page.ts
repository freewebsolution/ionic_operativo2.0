/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  UserProfile!: User;
  errMsg: string;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.profileUser()
      .subscribe(
        data => this.UserProfile = data,
        errMsg => this.errMsg = errMsg
      );
  }

}