import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VerificationInputModel } from 'src/app/common/models/api/input/verification-inputmodel';

export class VerificationForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(null, [Validators.email, Validators.required]),
      code: new FormControl(null, [Validators.required]),
    });
  }

  public get code() {
    return this.get('code');
  }

  public get email() {
    return this.get('email');
  }

  public createInputModel(): VerificationInputModel {
    let inputModel = new VerificationInputModel();
    inputModel.code = this.code?.value;
    inputModel.email = this.email?.value;
    return inputModel;
  }
}
