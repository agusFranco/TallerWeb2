import { FormControl, FormGroup, Validators } from '@angular/forms';

export class RegisterForm extends FormGroup {
  constructor() {
    super({
      firstName: new FormControl(null, [
        Validators.minLength(3),
        Validators.required,
      ]),
      lastName: new FormControl(null, [
        Validators.minLength(3),
        Validators.required,
      ]),
      address: new FormControl(null, [
        Validators.minLength(5),
        Validators.required,
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  public get email() {
    return this.get('email');
  }

  public get password() {
    return this.get('password');
  }

  public get firstName() {
    return this.get('firstName');
  }

  public get lastName() {
    return this.get('lastName');
  }

  public get address() {
    return this.get('address');
  }
}
