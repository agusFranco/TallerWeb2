import { Address } from './address';

export interface User {
  cognitoId: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  address: any;
}
