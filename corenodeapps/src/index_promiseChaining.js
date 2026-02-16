
const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        //declare mock user
        let user = { name: 'admin' }
        // let user;
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User not found')
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'Login is Success')
        } else {
            setTimeout(reject, 1000, 'Login is Failed')
        }
    })
}
const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'Login is Success') {
            setTimeout(resolve, 1000, 'Welcome to Admin')
        } else {
            setTimeout(reject, 1000, 'Welcome  to Guest')
        }
    })
}
function main() {
    getUser()
        .then(user => {
            return login(user)
        })
        .then(status => {
            return showDashboard(status)
        })
        .then(status => console.log(status))
        .catch(err => console.log(err))
}
main()
