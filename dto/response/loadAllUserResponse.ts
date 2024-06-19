export class LoadAllUserResponse {
    name: String;
    email: string;
    password: string;

    constructor(name: String, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}