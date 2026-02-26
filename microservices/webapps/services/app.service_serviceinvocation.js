const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')


const broker = new ServiceBroker()

//back end service
broker.createService({
    name: 'hello',
    actions: {
        sayHello: {
            handler(ctx) {
                return 'Hello Service'
            }
        }
    }
})

broker.createService({
    name: 'hai',
    actions: {
        sayHai: {
            handler(ctx) {
                return 'Hai Service'
            }
        }
    }
})

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api'
            }
        ]
    }
})


async function main() {
    try {
        await broker.start()
    }
    catch (err) {
        console.log(err)
    }

}
main()