/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  UserProfile!: User;
  isSignedIn!: boolean;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.auth.userAuthState){
      this.auth.userAuthState.subscribe((val) => {
        this.isSignedIn = val;
      });
    }
    if (this.token.isLoggedIn()){
      this.authService.profileUser()
        .subscribe((data: any) => {
          this.UserProfile = data;
        });
    }
}

signOut() {
  this.auth.setAuthState(false);
  this.token.removeToken();
  this.router.navigate(['login']);
}
}
