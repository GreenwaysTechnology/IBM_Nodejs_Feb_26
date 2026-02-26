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
                const id  = ctx.params.id
                return `${id} details`
            }
        },
        create: {
            handler(ctx) {
                const product = ctx.params 
                return product 
            }
        },
        update: {
            handler(ctx) {
                const  id  = ctx.params.id
                return `${id} details`
            }
        },
        remove: {
            handler(ctx) {
                const id  = ctx.params.id
                return `${id} details`
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