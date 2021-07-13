import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';

import { ForgotPasswordForm } from './forms/forgotpassword.form';
import { ForgotPasswordConfirmForm } from './forms/forgotpasswordconfirm.form';
import { LoginForm } from './forms/login.form';
import { RegisterForm } from './forms/register.form';
import { VerificationForm } from './forms/verification.form';

@Component({
  selector: 'auth-dialog',
  templateUrl: 'auth-dialog.component.html',
})
export class AuthDialogComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  public loginForm: LoginForm = new LoginForm();
  public registerForm: RegisterForm = new RegisterForm();
  public verificationForm: VerificationForm = new VerificationForm();
  public forgotPasswordForm: ForgotPasswordForm = new ForgotPasswordForm();
  public forgotPasswordConfirmForm: ForgotPasswordConfirmForm =
    new ForgotPasswordConfirmForm();

  // State
  public processing: boolean = false;
  public registerFormSuccess: boolean = false;
  public showForgotPassword: boolean = false;
  public showForgotPasswordConfirm: boolean = false;

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

  public handleForgotPassword(): void {
    this.showForgotPassword = true;
  }

  public handleGoBackLogin(): void {
    this.showForgotPassword = false;
    this.showForgotPasswordConfirm = false;
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
        this.verificationForm.email?.setValue(inputModel.email);
        this.notificationService.showSuccess(outputModel.message.text);
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
        this.loginForm.email?.setValue(inputModel.email);
        this.tabGroup.selectedIndex = 0;
      });
  }

  public submitForgotPassword(): void {
    if (!this.forgotPasswordForm.valid) {
      return;
    }

    this.processing = true;

    let inputModel = this.forgotPasswordForm.createInputModel();

    this.userService
      .forgotPassword(inputModel)
      .pipe(take(1))
      .subscribe((outputModel: any) => {
        this.processing = false;

        if (outputModel.hasError) {
          this.notificationService.showError(outputModel.message.text);
          return;
        }

        this.showForgotPassword = false;
        this.showForgotPasswordConfirm = true;
        this.notificationService.showSuccess(outputModel.message.text);
        this.forgotPasswordConfirmForm.email?.setValue(inputModel.email);
      });
  }

  public submitForgotPasswordConfirm(): void {
    if (!this.forgotPasswordConfirmForm.valid) {
      return;
    }

    this.processing = true;

    let inputModel = this.forgotPasswordConfirmForm.createInputModel();

    this.userService
      .forgotPasswordConfirm(inputModel)
      .pipe(take(1))
      .subscribe((outputModel: any) => {
        this.processing = false;

        if (outputModel.hasError) {
          this.notificationService.showError(outputModel.message.text);
          return;
        }

        this.notificationService.showSuccess(outputModel.message.text);
        this.loginForm.email?.setValue(inputModel.email);
        this.handleGoBackLogin();
      });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
