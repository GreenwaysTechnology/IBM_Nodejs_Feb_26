const { EventEmitter } = require('node:events')

function main() {
    //create emitter object
    const emitter = new EventEmitter()
    //Register event listener
    emitter.on('greet', (name) => {
        console.log(`Hello ${name}`)
    })

    //emit event
    emitter.emit('greet','Subramanian Murugan')

}
main()