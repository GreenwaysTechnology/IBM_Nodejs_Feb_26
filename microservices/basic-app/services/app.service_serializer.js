const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    serializer: "JSON"
})

//create service
broker.createService({
    name: 'products',
    actions: {
        findAll() {
            return [{
                id: 1,
                name: 'IPhone',
                qty: 100,
                price: 100000
            }]
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