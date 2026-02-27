const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    logger: "Console",
    // cacher: "Memory" //true
    cacher: "redis://localhost:6379"
})

broker.createService({
    name: 'user',
    actions: {
        list: {
            //meta information
            cache: true,
            handler(ctx) {
                this.logger.info('handler is called')
                return [{
                    id: 1, name: 'Subramanian'
                },
                {
                    id: 2, name: 'Murugan'
                }]
            }
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