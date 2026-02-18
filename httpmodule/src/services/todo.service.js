const TODOS = require('../data/todos')

class TodoService {

    //sync api
    // findAll() {
    //     return JSON.stringify(TODOS)
    // }
    findAll() {
        return new Promise((resolve, reject) => {
            const json = JSON.stringify(TODOS)
            setTimeout(resolve, 1000, json)
        })
    }
}
module.exports = new TodoService()