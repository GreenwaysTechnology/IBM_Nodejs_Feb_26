const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    //life cycle methods
    created(broker) {
        console.log('broker created')
    },
    started(broker) {
        console.log('broker started')
    },

    stopped(broker) {
        console.log('broker is stopped')
    }


})

broker.createService({
    name: 'math',
    actions: {
        add: {
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
    },
    //life cycle methods
    created() {
        console.log('math service is created')
    },
    merged() {
        console.log('math service is merged')
    },
    async started() {
        console.log('math service is started ')
    },
    async stoped() {
        console.log('math service is stopped')
    }


})


async function main() {
    try {
        await broker.start()
        //it will start interactive commandline tool
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }

}
main()