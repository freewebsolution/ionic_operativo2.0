import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from './services/auth-state.service';
import { TokenService } from './services/token.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isSignedIn!: boolean;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
    ) {}

    ngOnInit(): void {
      this.auth.userAuthState.subscribe((val)=> {
        this.isSignedIn=val;
      });
    }

    signOut() {
      this.auth.setAuthState(false);
      this.token.removeToken();
      this.router.navigate(['login']);
    }
}
