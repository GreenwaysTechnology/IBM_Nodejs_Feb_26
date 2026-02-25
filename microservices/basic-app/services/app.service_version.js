const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()


//create service
broker.createService({
    name: 'greeter',
    version: 1,
    actions: {
        sayGreet() {
            return 'Greet Version 1'
        }
    }
})
broker.createService({
    name: 'greeter',
    version: 2,
    actions: {
        sayGreet() {
            return 'Greet Version 2'
        }
    }
})

async function main() {
    //start the broker so that services can be deployed
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }

}
main()