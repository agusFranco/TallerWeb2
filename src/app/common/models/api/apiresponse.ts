import { APIMessage } from './apimessage';

export interface APIResponse<T> {
  data: T;
  message: APIMessage;
  hasError: boolean;
}
