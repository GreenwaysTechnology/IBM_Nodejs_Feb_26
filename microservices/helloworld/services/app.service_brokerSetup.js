const { ServiceBroker } = require('moleculer')

//service broker takes arg(object -  service schema)
const broker = new ServiceBroker()


// function main() {
//     //start the broker so that services can be deployed
//     broker.start()
//         .then(() => {
//             console.log('broker started succesffully')
//         })
//         .catch(err => console.log('broker failed to start', err))
// }
// main()


async function main() {
    //start the broker so that services can be deployed
    try {
        await broker.start()
        console.log('Service Broker is Ready!')
    }
    catch (err) {
        console.log(err)
    }

}
main()