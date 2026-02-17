const USERS = require('../data/users')
class UserService {
    findAll() {
        return USERS
    }
}
//share this class outside
// module.exports = UserService
module.exports = new UserService()