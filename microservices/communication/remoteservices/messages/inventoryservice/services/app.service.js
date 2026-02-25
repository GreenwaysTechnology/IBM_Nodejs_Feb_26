const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})

broker.createService({
    name: 'inventory',
    events: {
        'order.created': {
            handler(ctx) {
                console.log('order received', ctx.params)
            }
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