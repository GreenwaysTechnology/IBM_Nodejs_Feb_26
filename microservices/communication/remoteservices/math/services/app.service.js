const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter: "TCP"
// })


const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})


broker.createService({
    name: 'math',
    actions: {
        //biz logic
        multiply(ctx) {
            const { a, b } = ctx.params
            return ctx.call('multipler.multiply', { a, b })
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