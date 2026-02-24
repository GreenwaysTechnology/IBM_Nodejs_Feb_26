const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//create service
broker.createService({
    name: 'greeter',
    actions: {
        //biz logic
        sayHello() {
            return 'Hello Services'
        },
        sayHai() {
            return 'Hai Service'
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
        console.log('Response: ', helloResponse,haiResponse)
    }
    catch (err) {
        console.log(err)
    }

}
main()