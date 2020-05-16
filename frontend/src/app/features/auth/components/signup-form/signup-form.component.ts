import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  form: FormGroup;
  showPassword = false;
  agreeOnPrivacyPolicy = false;

  @Output() signupCompleted: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  updatePolicyAgreement(): void {
    this.agreeOnPrivacyPolicy = !this.agreeOnPrivacyPolicy;
  }

  onSubmit(): void {
    const formValue = this.form.value;
    if (formValue.password1 === formValue.password2) {
      this.authService
        .register(formValue.username, formValue.email, formValue.password)
        .subscribe(
          (res) => this.login(res.username, formValue.password),
          (err) => this.handleErrors(err)
        );
    }
  }

  login(username: string, password: string) {
    this.authService
      .login(username, password)
      .subscribe(() => this.signupCompleted.emit(true));
  }

  handleErrors(err: HttpErrorResponse) {
    const validationErrors = err.error;
    Object.keys(validationErrors).forEach((key) => {
      const formControl = this.form.get(key);
      if (formControl) {
        formControl.setErrors({
          serverErrors: validationErrors[key],
        });
      }
    });
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
