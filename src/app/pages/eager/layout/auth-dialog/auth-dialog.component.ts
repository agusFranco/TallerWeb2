import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';

import { LoginForm } from './forms/login.form';
import { RegisterForm } from './forms/register.form';
import { VerificationForm } from './forms/verification.form';

@Component({
  selector: 'auth-dialog',
  templateUrl: 'auth-dialog.component.html',
})
export class AuthDialogComponent implements OnInit {
  public loginForm: LoginForm = new LoginForm();
  public registerForm: RegisterForm = new RegisterForm();
  public verificationForm: VerificationForm = new VerificationForm();

  // State
  public processing: boolean = false;
  public registerFormSuccess: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private userService: UserService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  public handleUserHasCode(): void {
    this.registerFormSuccess = true;
  }

  public handleUserDontHasCode(): void {
    this.registerFormSuccess = false;
  }

  public submitLogin(): void {
    if (!this.loginForm.valid) {
      return;
    }

    this.processing = true;

    let inputModel = this.loginForm.createInputModel();

    this.userService
      .login(inputModel)
      .pipe(take(1))
      .subscribe((outputModel: any) => {
        this.processing = false;

        if (outputModel.hasError) {
          this.notificationService.showError(outputModel.message.text);
          return;
        }

        this.notificationService.showSuccess(outputModel.message.text);
        this.authService.setUser(outputModel.data.user);
        this.authService.setToken(outputModel.data.token);
        this.dialogRef.close();
      });
  }

  public submitRegister(): void {
    if (!this.registerForm.valid) {
      return;
    }

    this.processing = true;

    let inputModel = this.registerForm.createInputModel();

    this.userService
      .register(inputModel)
      .pipe(take(1))
      .subscribe((outputModel: any) => {
        this.processing = false;

        if (outputModel.hasError) {
          this.notificationService.showError(outputModel.message.text);
          return;
        }

        this.registerFormSuccess = true;
        this.notificationService.showSuccess(outputModel.message.text);
        this.dialogRef.close();
      });
  }

  public submitVerification(): void {
    if (!this.verificationForm.valid) {
      return;
    }

    this.processing = true;

    let inputModel = this.verificationForm.createInputModel();

    this.userService
      .verify(inputModel)
      .pipe(take(1))
      .subscribe((outputModel: any) => {
        this.processing = false;

        if (outputModel.hasError) {
          this.notificationService.showError(outputModel.message.text);
          return;
        }

        this.notificationService.showSuccess(outputModel.message.text);
        this.dialogRef.close();
      });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
