function blockMe(message) {
    console.log(message)
}
function greet(cb) {
  //add any non blocking api provided by node.js - timer
  setTimeout(cb,3000)
}
function main() {
    blockMe('start')
    greet(function () {
        console.log('hello')
    })
    blockMe('end')

}
main()
