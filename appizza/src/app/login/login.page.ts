/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthStateService } from '../services/auth-state.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errors: any = null;
  styleCss: object;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private loading: LoadingController,
    private toast: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
    this.styleCss = { display: 'none' };
  }
  ngOnInit() {
  }
  onSubmit() {
    this.styleCss = { display: 'block' };
    this.authService.login(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.styleCss = { display: 'none' };
        this.showToast('Login avvenuto con successo');
        setTimeout(()=>{
          window.location.href = 'http://localhost:8100/home';
        },4000);
      }
    );
  }

  // Handle response
  responseHandler(data: any) {
    this.token.handleData(data.access_token);
  }
  // async showLoading() {
  //   const loader = await this.loading.create({
  //     message: 'Caricamento in corso',
  //     duration: 2000
  //   });
  //   await loader.present();
  // }
  async showToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 4000,
    });
    await toast.present();
  }
}
