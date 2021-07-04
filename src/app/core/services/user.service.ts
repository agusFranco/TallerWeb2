import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';
import { APIResponse } from 'src/app/common/models/api/apiresponse';
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

  public obtenerUsuario(id: number): User {
    return {
      email: 'seba@gmail.com',
      firstName: 'Sebastian',
      lastName: 'Tofano',
      address: 'Lomas del Mirador 1111',
    };
  }
}
