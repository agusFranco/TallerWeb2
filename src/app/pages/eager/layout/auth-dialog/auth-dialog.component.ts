import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

import { LoginForm } from './forms/login.form';
import { RegisterForm } from './forms/register.form';

@Component({
  selector: 'auth-dialog',
  templateUrl: 'auth-dialog.component.html',
})
export class AuthDialogComponent implements OnInit {
  public loginForm: LoginForm = new LoginForm();
  public registerForm: RegisterForm = new RegisterForm();

  // State
  public processing: boolean = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // this.prueba?.valueChanges
    //   .pipe(
    //     takeWhile(() => true),
    //     debounce(() => interval(3000))
    //   )
    //   .subscribe((value) => {
    //     if (this.prueba?.valid) {
    //       console.log(
    //         `ESTOY LLAMANDO A UNA API PARA VER QUE SEA VALIDO: ${value}`
    //       );
    //     }
    //   });
  }

  public setHeightLogin(): void {}

  public submitLogin(): void {
    if (!this.loginForm.valid) {
      return;
    }

    this.processing = true;

    let inputModel = this.loginForm.createInputModel();

    this.userService
      .login(inputModel)
      .pipe(take(1))
      .subscribe((outputModel) => {
        if (outputModel?.hasErrors) {
          // handle response;
        }

        this.authService.setUser(outputModel.data);
        this.processing = false;
        this.dialogRef.close();
      });
  }

  public submitRegister(): void {
    if (!this.registerForm.valid) {
      return;
    }

    // Crear un LoginInputModel;
    // Llamo al servicio,
    // Disparo un evento,
    // Cualquier Cosa;
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
