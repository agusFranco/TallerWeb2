import { Address } from "../../address";

export class RegisterInputModel {
  public email!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public address!: Address;
}
