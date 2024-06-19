import router from "../common/router.js";
import { validateOrReject } from "class-validator";

// DTO Import
import {RegisterUserResponse} from "../dto/response/registerUserResponse";
import {RegisterUserCommand} from '../dto/request/registerUserCommand';


/* POST API With Request Body(JSON) */
router.post('/api/v1/register', async (req, res) => {
    const registerUserCommand = new RegisterUserCommand(req.body)
    const registerUserResponse = new RegisterUserResponse(registerUserCommand)

    try {
        // 유효성 검사
        await validateOrReject(registerUserCommand);
        res.status(201).json({
            message: 'User registered successfully.',
            data: registerUserResponse
        })
    } catch (errors) {
        res.status(400).json({
            message: 'Validation Error',
            errors
        })
    }
})

export default router