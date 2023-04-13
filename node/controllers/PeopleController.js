const database = require('../models')

class PeopleController {
    static async getPeople(req, res) {
        try {
            const people = await database.People.findAll()
            return res.status(200).json(people)
        } catch {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController