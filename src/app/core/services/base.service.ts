import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/common/models/api/apiresponse';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseService {
  constructor(protected http: HttpClient) {}

  protected getBaseUrl(): string {
    return environment.apiUrl;
  }

  protected executeGet<T>(
    endpointPath: string,
    options: Object = {}
  ): Observable<APIResponse<T>> {
    return this.http.get<APIResponse<T>>(
      `${this.getBaseUrl()}${endpointPath}`,
      options
    );
  }

  protected executePost<T>(
    endpointPath: string,
    inputModel: any,
    options: Object = {}
  ): Observable<APIResponse<T>> {
    const input = JSON.stringify(inputModel);
    return this.http.post<APIResponse<T>>(
      `${this.getBaseUrl()}${endpointPath}`,
      input,
      options
    );
  }

  protected executePut<T>(
    endpointPath: string,
    inputModel: any,
    options: Object = {}
  ): Observable<APIResponse<T>> {
    const input = JSON.stringify(inputModel);
    return this.http.put<APIResponse<T>>(
      `${this.getBaseUrl()}${endpointPath}`,
      input,
      options
    );
  }

  protected executeDelete<T>(
    endpointPath: string,
    options: Object = {}
  ): Observable<APIResponse<T>> {
    return this.http.delete<APIResponse<T>>(
      `${this.getBaseUrl()}${endpointPath}`,
      options
    );
  }
}
