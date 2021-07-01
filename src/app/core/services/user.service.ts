import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';
import { APIResponse } from 'src/app/common/models/api/apiresponse';
import { LoginInputModel } from 'src/app/common/models/api/input/login-inputmodel';
import { RegisterInputModel } from 'src/app/common/models/api/input/register-inputmodel';
import { User } from 'src/app/common/models/user';

import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService {
  public login(inputModel: LoginInputModel): Observable<APIResponse<User>> {
    console.log('Se va a Enviar:' + JSON.stringify(inputModel));

  // return this.executeGet<User>(APIEndpoints.User.Login);
    return of({
      data: {
        address: 'Direccion',
        email: 'Mock@test.com',
        firstName: 'Agustin',
        lastName: 'Franco',
      },
      hasErrors: false,
      messages: [],
    });
  }

  public register(inputModel: RegisterInputModel): Observable<any> {
    return of({});
  }


  public obtenerUsuario(id: number): User{
    return { email: "seba@gmail.com", firstName: "Sebastian", lastName: "Tofano", address: "Lomas del Mirador 1111"}
  }

}
