function blockMe(message) {
    console.log(message)
}
function greet(cb) {
  //add any non blocking api provided by node.js - timer
  setTimeout(cb,3000,'Hello')
}
function main() {
    blockMe('start')
    greet(function (data) {
        console.log(data)
    })
    blockMe('end')

}
main()
