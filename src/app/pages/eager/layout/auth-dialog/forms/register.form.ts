import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterInputModel } from 'src/app/common/models/api/input/register-inputmodel';

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
      street: new FormControl(null, [
        Validators.minLength(1),
        Validators.required,
      ]),
      number: new FormControl(null, [
        Validators.minLength(1),
        Validators.required,
      ]),
      city: new FormControl(null, [
        Validators.minLength(1),
        Validators.required,
      ]),
      province: new FormControl(null, [
        Validators.minLength(1),
        Validators.required,
      ]),
      country: new FormControl(null, [
        Validators.minLength(1),
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

  public get country() {
    return this.get('country');
  }

  public get number() {
    return this.get('number');
  }

  public get street() {
    return this.get('street');
  }

  public get province() {
    return this.get('province');
  }

  public get city() {
    return this.get('city');
  }

  public createInputModel(): RegisterInputModel {
    let inputModel = new RegisterInputModel();

    inputModel.email = this.email?.value;
    inputModel.password = this.password?.value;
    inputModel.firstName = this.firstName?.value;
    inputModel.lastName = this.lastName?.value;
    inputModel.address = {
      city: this.city?.value,
      province: this.province?.value,
      country: this.country?.value,
      street: this.street?.value,
      number: this.number?.value,
    };
    return inputModel;
  }
}
