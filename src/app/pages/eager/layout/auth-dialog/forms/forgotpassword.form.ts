import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordInputModel } from 'src/app/common/models/api/input/forgot-password.inputmodel';

export class ForgotPasswordForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(null, [Validators.email, Validators.required]),
    });
  }

  public get email() {
    return this.get('email');
  }

  public createInputModel(): ForgotPasswordInputModel {
    let inputModel = new ForgotPasswordInputModel();
    inputModel.email = this.email?.value;
    return inputModel;
  }
}
