import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  showPassword = false;
  loginFailed = false;

  @Output() loginCompleted: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      emailOrUsername: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const formValue = this.form.value;
    this.authService
      .login(formValue.emailOrUsername, formValue.password)
      .subscribe(
        (res) => this.loginCompleted.emit(true),
        (err) => this.handleError(err)
      );
  }

  handleError(err: HttpErrorResponse) {
    const validationErrors = err.error;
    console.log(validationErrors);
    if (validationErrors) {
      this.loginFailed = true;
    }
  }

  get emailOrUsername() {
    return this.form.get('emailOrUsername');
  }

  get password() {
    return this.form.get('password');
  }
}
