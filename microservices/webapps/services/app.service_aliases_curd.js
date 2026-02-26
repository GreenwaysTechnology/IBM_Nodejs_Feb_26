const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')


const broker = new ServiceBroker()

//back end service
broker.createService({
    name: 'products',
    actions: {
        list: {
            handler(ctx) {
                return 'Get All Product'
            }
        },
        get: {
            handler(ctx) {
                return 'Get Product By Id'
            }
        },
        create: {
            handler(ctx) {
                return 'Post Product'
            }
        },
        update: {
            handler(ctx) {
                return 'Update by Id'
            }
        },
        remove: {
            handler(ctx) {
                return 'Remove'
            }
        }
    }
})

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api',
                aliases: {
                    "GET products": "products.list",
                    "GET products/:id": "products.get", //products/1 products/2 
                    "POST products": "products.create",
                    "PUT products/:id": "products.update",
                    "DELETE products/:id": "products.remove"
                }
            }
        ]
    }
})


async function main() {
    try {
        await broker.start()
    }
    catch (err) {
        console.log(err)
    }

}
main()