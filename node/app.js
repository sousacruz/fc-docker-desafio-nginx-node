const express = require('express')
const routes = require('./routes')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 3000

// https://stackoverflow.com/questions/21105748/sequelize-js-how-to-use-migrations-and-sync

app.use(cors({
  origin: '*'
}));

routes(app)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/about', (req,res) => {
  res.sendFile(path.join(__dirname+'/about.html'));
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app

