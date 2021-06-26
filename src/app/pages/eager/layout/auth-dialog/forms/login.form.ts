import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginInputModel } from 'src/app/common/models/api/input/login-inputmodel';

export class LoginForm extends FormGroup {
  constructor() {
    super({
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

  public createInputModel(): LoginInputModel {
    let inputModel = new LoginInputModel();

    inputModel.email = this.email?.value;
    inputModel.password = this.password?.value;

    return inputModel;
  }
}
