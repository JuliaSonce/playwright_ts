import { UserData } from '../interfaces/user.i'

export class UserModel implements UserData {

    firstName: string;
    lastName: string;
    email: string;
    password: string;


    constructor(firstName: string, lastName: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

    }
}
