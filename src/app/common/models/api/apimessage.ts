import { APIMessageType } from './apimessagetype';

export interface APIMessage {
  text: string;
  code: string;
  type: APIMessageType;
}
