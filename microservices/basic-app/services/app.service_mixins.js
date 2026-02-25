const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//parent services
const helloService = {
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello'
        }
    }
}
const haiService = {
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai'
        }
    }
}

//create service
broker.createService({
    name: 'greeter',
    mixins: [helloService, haiService],
    actions: {
        sayGreet() {
            return 'Greet'
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