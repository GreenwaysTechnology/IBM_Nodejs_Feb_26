const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    requestTimeout: 5000 // global timeout
})

broker.createService({
    name: 'main',
    actions: {
        begin: {
            //meta configuration
            fallback: () => {
                return `Fallback response ${0}`
            },
            async handler(ctx) {
                const { a, b, timeout } = ctx.params
                //call(nameofservice.methodname,params,timeout)
                let res = await ctx.call('remotetimeout.calculate', { a, b }, {
                    timeout: timeout
                })
                console.log(`Result Got From Remote Services ${res}`)
            }
        }

    }
})
broker.createService({
    name: 'remotetimeout',
    actions: {
        async calculate(ctx) {
            const { a, b } = ctx.params
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 3000, `${a + b} - ${broker.nodeID} `)
            })
        }
    }
})


async function main() {
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }

}
main()