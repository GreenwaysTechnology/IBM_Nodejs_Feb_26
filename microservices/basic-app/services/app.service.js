const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        add(ctx) {
            console.log(ctx)
            return ctx.params.a + ctx.params.b
        }
    }
})


async function main() {
    //start the broker so that services can be deployed
    try {
        await broker.start()
        const add = await broker.call('math.add', { a: 45, b: 20 })
        console.log('Add :', add)
    }
    catch (err) {
        console.log(err)
    }

}
main()