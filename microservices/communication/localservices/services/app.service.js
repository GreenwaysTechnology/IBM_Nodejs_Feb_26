const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        //biz logic
        multiply(ctx) {
            const { a, b } = ctx.params
            //services can talk other services via ctx object
            return ctx.call('multipler.multiply', { a, b })
        }
    }
})

broker.createService({
    name: 'multipler',
    actions: {
        //biz logic
        multiply(ctx) {
            const { a, b } = ctx.params
            return a * b
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