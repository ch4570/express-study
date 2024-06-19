import {RegisterUserResponse} from "../dto/response/registerUserResponse";
import {RegisterUserCommand} from '../dto/request/registerUserCommand';

const express = require('express');
const router = express.Router();


/* POST API With Request Body(JSON) */
router.post('/api/v1/register', (req, res) => {
    const registerUserCommand = new RegisterUserCommand(req.body)
    const registerUserResponse = new RegisterUserResponse(registerUserCommand)

    res.json({
        data : registerUserResponse
    })
})

module.exports = router;