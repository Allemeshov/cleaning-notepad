import {LoginUserData} from "./login-user-data.interface";

export interface RegisterUserDataInterface extends LoginUserData{
  phone: string;
  name: string;
}
