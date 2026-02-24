const { ServiceBroker } = require('moleculer')

//service broker takes arg(object -  service schema)
const broker = new ServiceBroker()

//create service
broker.createService({
    name: 'hello',
    actions: {
        //biz logic
        sayHello() {
            return 'Hello Services'
        }
    }
})

async function main() {
    //start the broker so that services can be deployed
    try {
        await broker.start()
        console.log('Service Broker is Ready!')
    }
    catch (err) {
        console.log(err)
    }

}
main()