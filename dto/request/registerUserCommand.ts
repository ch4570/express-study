import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class RegisterUserCommand {

    @IsNotEmpty({
        message: '이름은 입력 필수입니다.'
    })
    name: string;

    @IsNotEmpty({
        message: '이메일은 입력 필수입니다.'
    })
    @IsEmail({}, {
        message: '이메일은 형식에 맞아야 합니다.'
    })
    email: string;

    @IsNotEmpty({
        message: '비밀번호는 입력 필수입니다.'
    })
    @MinLength(10, {
        message: '비밀번호는 최소 10자리 이상이어야 합니다.'
    })
    password: string;

    constructor({ name, email, password }: { name: string, email: string, password: string }) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
