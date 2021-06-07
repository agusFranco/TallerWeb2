import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'auth-dialog',
  templateUrl: 'auth-dialog.component.html',
})
export class AuthDialogComponent implements OnInit {
  public formularioLogin: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  public get email() {
    return this.formularioLogin.get('email');
  }

  public get password() {
    return this.formularioLogin.get('password');
  }

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
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

  public submitForm(): void {
    if (!this.formularioLogin.valid) {
      return;
    }

    console.log('Clickearon submit');

    // Crear un LoginInputModel;
    // Llamo al servicio,
    // Disparo un evento,
    // Cualquier Cosa;
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
