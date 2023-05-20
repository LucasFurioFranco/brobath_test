const express    = require('express')

const app = express()
const port = 3000
const system_name = "brobath_test (v0)"


app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.get('/getter', function (req, res) {
  res.status(200);
  res.json({
    "system_name": system_name,
    "status":     200,
    "message":    "success",
    "body":       req.query,
    "payload":    {},
    "aux_poster": 'var xhr = new XMLHttpRequest();\n' +
                      'xhr.open("post", "http://lucasfuriofranco.com.br:3000/poster");\n' +
                      'xhr.setRequestHeader("Content-Type", "application/json");\n'+
                      'xhr.send(JSON.stringify({foo:"bar"}));'
  });
})

app.post('/poster', function (req, res) {
  res.status(200);
  res.json({
    "system_name": system_name,
    "status":      200,
    "message":     "success",
    "body":        req.body,
    "payload":     {}
  })
})

app.get('*', (req, res) => {
  res.status(404);
  res.json({
    "system_name": system_name,
    "status":  404,
    "message": "Not Found: Method GET not defined for this path",
    "body":    req.query,
    "payload": {}
  });
})

app.post('*', (req, res) => {
  res.status(404);
  res.json({
    "system_name": system_name,
    "status":  404,
    "message": "Not Found: Method POST not defined for this path",
    "body":    req.body,
    "payload": {}
  });
})
