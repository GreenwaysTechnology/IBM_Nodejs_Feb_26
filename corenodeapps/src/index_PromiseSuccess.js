function blockMe(message) {
    console.log(message)
}
function getPromise() {
    //factory api to return promise object
    return Promise.resolve('Hello')
}

function main() {
    blockMe('start')
    getPromise().then(status => console.log(status))
    blockMe('end')
}
main()
