const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//create service
broker.createService({
    name: 'greeter',
    actions: {
        //biz logic
        sayHello() {
            return 'Hello'
        },
        sayHai() {
            return 'Hai'
        }
    }
})

//create service
broker.createService({
    name: 'math',
    actions: {
        add() {
            return 10 + 10
        },
        multiply() {
            return 20 * 20
        }
    }
})

async function main() {
    //start the broker so that services can be deployed
    try {
        await broker.start()
        console.log('Service Broker is Ready!')
        //invoke biz logic
        const helloResponse = await broker.call('greeter.sayHello')
        const haiResponse = await broker.call('greeter.sayHai')
        const addResponse = await broker.call('math.add')
        const multiplyResponse = await broker.call('math.multiply')
        console.log(helloResponse, haiResponse, addResponse, multiplyResponse)
    }
    catch (err) {
        console.log(err)
    }

}
main()