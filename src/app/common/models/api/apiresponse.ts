import { APIMessage } from './apimessage';

export interface APIResponse<T> {
    data: T;
    messages: APIMessage[];
    hasErrors: boolean;
  }
  