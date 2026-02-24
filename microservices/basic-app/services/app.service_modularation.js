const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()
//register external services
broker.loadService('./services/math.service')


async function main() {
    //start the broker so that services can be deployed
    try {
        await broker.start()
        const add = await broker.call('math.add')
        console.log('Add :', add)
    }
    catch (err) {
        console.log(err)
    }

}
main()