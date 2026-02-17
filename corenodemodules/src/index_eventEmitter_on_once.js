const { EventEmitter } = require('node:events')

function main() {
    //create emitter object
    const emitter = new EventEmitter()
    //Register event listener
    emitter.on('connect', (status) => {
        console.log(`${status}`)
    })
    emitter.once('disconnect', (status) => {
        console.log(`${status}`)
    })
    //emit event
    emitter.emit('connect', 'Connecting...')
    emitter.emit('connect', 'Connecting...')
    emitter.emit('connect', 'Connecting...')

    emitter.emit('disconnect', 'Disconnecting...')
    emitter.emit('disconnect', 'Disconnecting...')

}
main()