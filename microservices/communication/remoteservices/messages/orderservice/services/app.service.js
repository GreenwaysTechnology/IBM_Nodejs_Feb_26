const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})

broker.createService({
    name: 'orders',
    actions: {
        placeorder: {
            async handler(ctx) {
                const { orderId, name } = ctx.params
                ctx.emit('order.created', { id: orderId, name: name })
                return 'Order Placed'
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