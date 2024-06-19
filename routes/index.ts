import router from "../common/router.js";

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

export default router;