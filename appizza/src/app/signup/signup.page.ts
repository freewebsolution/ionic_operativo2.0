/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  registerForm: FormGroup;
  errors: any = null;
  submitted = false;
  success = '';
  error_messages = {
    'name': [
      { type: 'required', message: '*Name is required.' },
    ],

    'email': [
      { type: 'required', message: '*Email is required.' },
      { type: 'minlength', message: '*Email length.' },
      { type: 'maxlength', message: '*Email length.' },
      { type: 'pattern', message: '*please enter a valid email address.' }
    ],

    'password': [
      { type: 'required', message: '*password is required.' },
      { type: 'minlength', message: '*password length.' },
      { type: 'pattern', message: '*Inserisci una maiuscola,una minuscola, numero, carattere speciale ' }
    ],
    'password_confirmation': [
      { type: 'required', message: '*password is required.' },
      { type: 'minlength', message: '*password length.' }
    ],
  };
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
    });
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
      ])),
      password_confirmation: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
      ])),
    }, {
      validators: this.password.bind(this)
    });
  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('password_confirmation');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    );
  }

}
