const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET SAMPLE API */
router.get('/api/v1/sample', function (req, res) {
  res.json({
    "message" : "GET : Hello Sample API From node-js-api"
  })
})

/* POST SAMPLE API */
router.post('/api/v1/sample', function (req, res) {
  res.json({
    "message" : "POST : Hello Sample API From node-js-api"
  })
})

/* GET API With Query Parameter */
router.get('/api/v1/query', (req, res) => {
  const { name } = req.query
  res.json({
    "name" : name
  })
})

/* GET API With Multiple Path Variable */
router.get('/api/v1/:department/:name', (req, res) => {
  const { department, name } = req.params
  res.json({
    "department" : department,
    "name" : name
  })
})

/* GET API With Multiple Query Parameter */
router.get('/api/v1/multipleQuery', (req, res) => {
  const { name, age, department } = req.query
  res.json({
    "name" : name,
    "age" : age,
    "department" : department
  })
})

/* POST API With Request Body(JSON) */
router.post('/api/v1/register',[
    body('name').notEmpty().withMessage('이름은 필수 입력입니다.'),
    body('email').notEmpty().withMessage('이메일은 필수 입력입니다.'),
    body('email').isEmail().withMessage('이메일을 형식에 맞게 입력해야 합니다.'),
    body('password').isLength({ min : 10 }).withMessage('비밀번호는 10자리 이상이여야 합니다.'),
    body('password').notEmpty().withMessage('비밀번호는 필수 입력입니다.')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors : errors.array() })
  }

  const registerUser = new User(req.body)
  res.json({
    data : registerUser
  })
})

module.exports = router;

class User {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}