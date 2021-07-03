import { Address } from './address';

export interface User {
    email:string;
    password?:string;
    firstName:string;
    lastName:string;
    address: any;
}