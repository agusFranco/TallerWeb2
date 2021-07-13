import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';
import { APIResponse } from 'src/app/common/models/api/apiresponse';
import { ForgotPasswordConfirmInputModel } from 'src/app/common/models/api/input/forgot-password-confirm.inputmodel';
import { ForgotPasswordInputModel } from 'src/app/common/models/api/input/forgot-password.inputmodel';
import { LoginInputModel } from 'src/app/common/models/api/input/login-inputmodel';
import { RegisterInputModel } from 'src/app/common/models/api/input/register-inputmodel';
import { VerificationInputModel } from 'src/app/common/models/api/input/verification-inputmodel';
import { User } from 'src/app/common/models/user';

import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService {
  public login(inputModel: LoginInputModel): Observable<APIResponse<User>> {
    return this.executePost<User>(APIEndpoints.User.Login, inputModel);
  }

  public register(inputModel: RegisterInputModel): Observable<any> {
    return this.executePost<User>(APIEndpoints.User.Register, inputModel);
  }

  public verify(inputModel: VerificationInputModel): Observable<any> {
    return this.executePost<User>(APIEndpoints.User.Verify, inputModel);
  }

  public forgotPassword(inputModel: ForgotPasswordInputModel): Observable<any> {
    return this.executePost<User>(APIEndpoints.User.ForgotPassword, inputModel);
  }

  public forgotPasswordConfirm(
    inputModel: ForgotPasswordConfirmInputModel
  ): Observable<any> {
    return this.executePost<User>(
      APIEndpoints.User.ForgotPasswordConfirm,
      inputModel
    );
  }
}
