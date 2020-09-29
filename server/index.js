const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const path = require('path')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(history())

app.use(express.static(path.join(__dirname, '../dist')))
app.post('/search', function (req, res) {
  axios
    .post('http://services.morfix.com/translationhebrew/TranslationService/GetTranslation/', {
      Query: req.body.word,
      ClientName: 'Android_Hebrew',
    })
    .then(function (response) {
      res.send(response.data)
    })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))
