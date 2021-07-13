import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordConfirmInputModel } from 'src/app/common/models/api/input/forgot-password-confirm.inputmodel';

export class ForgotPasswordConfirmForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(null, [Validators.email, Validators.required]),
      code: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  public get email() {
    return this.get('email');
  }

  public get code() {
    return this.get('code');
  }

  public get password() {
    return this.get('password');
  }

  public createInputModel(): ForgotPasswordConfirmInputModel {
    let inputModel = new ForgotPasswordConfirmInputModel();
    inputModel.email = this.email?.value;
    inputModel.code = this.code?.value;
    inputModel.password = this.password?.value;
    return inputModel;
  }
}
