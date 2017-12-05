import { IEmployee } from './employee.interface';
export interface IUserLogged {
    currentMatch: IEmployee,
    matches: IEmployee[]
}