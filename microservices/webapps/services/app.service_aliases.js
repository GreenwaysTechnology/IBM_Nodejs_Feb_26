const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')


const broker = new ServiceBroker()

//back end service
broker.createService({
    name: 'greeter',
    actions: {
        sayHello: {
            handler(ctx) {
                return 'Hello Service'
            }
        },
        sayHai: {
            handler(ctx) {
                return 'Hai Service'
            }
        },
        sayGreet: {
            handler(ctx) {
                return 'Greet Service'
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
                path: '/api',
                aliases: {
                    "hello": "greeter.sayHello",
                    "hai": "greeter.sayHai",
                    "greet": "greeter.sayGreet"
                }
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