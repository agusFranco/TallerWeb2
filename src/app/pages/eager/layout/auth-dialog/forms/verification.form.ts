import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VerificationInputModel } from 'src/app/common/models/api/input/verification-inputmodel';

export class VerificationForm extends FormGroup {
  constructor() {
    super({
      code: new FormControl(null, [Validators.required]),
    });
  }

  public get code() {
    return this.get('code');
  }

  public createInputModel(): VerificationInputModel {
    let inputModel = new VerificationInputModel();
    inputModel.code = this.code?.value;
    return inputModel;
  }
}
