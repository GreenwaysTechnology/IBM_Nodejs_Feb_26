const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        // add(ctx) {
        //     console.log(ctx)
        //     return ctx.params.a + ctx.params.b
        // }
        add: {
            //add method meta data
            // params: {
            //     a: 'number',
            //     b: 'number'
            // },
            params: {
                a: {
                    type: 'number', positive: true, integer: true
                },
                a: {
                    type: 'number', positive: true, integer: true
                },
            },
            handler(ctx) {
                return ctx.params.a + ctx.params.b
            }
        }
    }
})


async function main() {
    //start the broker so that services can be deployed
    try {
        await broker.start()
        const add = await broker.call('math.add', { a: 'abc', b: 23.7 })
        console.log('Add :', add)
    }
    catch (err) {
        console.log(err)
    }

}
main()