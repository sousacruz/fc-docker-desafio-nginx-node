const bodyParser = require('body-parser')
const people = require('./PeopleRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(people)
}