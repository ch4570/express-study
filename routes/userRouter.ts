import router from "../common/router.js";
import { validateOrReject } from "class-validator";
import { register } from "../service/registerUserService";
import {loadAllUsers, loadUserByName} from "../service/loadUserService";

// DTO Import
import { RegisterUserResponse } from "../dto/response/registerUserResponse";
import { RegisterUserCommand } from '../dto/request/registerUserCommand';


/* POST API With Request Body(JSON) */
router.post('/api/v1/users', async (req, res) => {
    const registerUserCommand = new RegisterUserCommand(req.body)
    const registerUserResponse = new RegisterUserResponse(registerUserCommand)

    try {
        // 유효성 검사
        await validateOrReject(registerUserCommand);

        // 유저 저장
        register(registerUserCommand.name, registerUserCommand.email, registerUserCommand.password)
            .catch(error => {
                console.error(`Error in registerUser : ${error}`)
            })

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

/* GET Load All Saved Users */
router.get('/api/v1/users', async (req, res) => {
    const userList = await loadAllUsers()
    console.log(`userList = ${userList}`)

    res.json({
        message : 'User found successfully.',
        data : userList
    })
})

/* GET Load One User By Name */
router.get('/api/v1/users/:name', async (req, res) => {
    const user = await loadUserByName(req.params.name)
    console.log(`user = ${user}`)

    if (user === null) {
        res.status(204)
    }

    res.json({
        message : 'User found successfully.',
        data : user
    })
})


export default router