import {Role} from "./role.model";
export interface User {
  id?: number,
  firstName: string,
  lastName: string,
  secondName?: string,
  email: string,
  password: string,
  dateOfBirth?: Date,
  phoneNumber?: string,
  role: Role,
  isDeactivated?:boolean,
  dateOfDeactivation?: Date;
}
