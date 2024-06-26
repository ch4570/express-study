export class RegisterUserResponse {
    name: String;
    email: string;
    password: string;

    constructor({ name, email, password } : {name: string, email: string, password: string }) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}