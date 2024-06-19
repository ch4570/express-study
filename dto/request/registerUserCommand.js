import { isNotEmpty, IsEmail, minLength } from 'class-validator'
import { Expose } from 'class-transformer'

export class RegisterUserCommand {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @Expose
    @isNotEmpty({
        message : '이름은 입력 필수입니다.'
    })
    name;

    @Expose
    @isNotEmpty({
        message : '이메일은 입력 필수입니다.'
    })
    @IsEmail({
        message : '이메일은 형식에 맞아야 합니다.'
    })
    email;

    @Expose
    @minLength( {
        message : '비밀번호는 최소 10자리 이상이어야 합니다.'
    }, 10)
    password;
}