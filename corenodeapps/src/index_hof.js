function blockMe(message) {
    console.log(message)
}
function greet(cb) {
   cb()
}
function main() {
    blockMe('start')
    greet(function () {
        console.log('hello')
    })
    blockMe('end')

}
main()
