// const UserSerivce = require('./services/user.service')
const { findAll } = require('./services/user.service')

function main() {
    //   console.log(UserSerivce)
    // const userService = new UserSerivce()
    //console.log(UserSerivce.findAll())
    console.log(findAll())
}
main()