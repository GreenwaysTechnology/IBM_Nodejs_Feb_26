const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter: "TCP"
// })

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})


broker.createService({
    name: 'multipler',
    actions: {
        //biz logic
        multiply(ctx) {
            const { a, b } = ctx.params
            return `${a * b} from ${ctx.nodeID}`
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