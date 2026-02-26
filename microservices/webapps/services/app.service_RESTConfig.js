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
    name: 'customers',
    actions: {
        list: {
            handler(ctx) {
                return 'Get all customers'
            }
        },
        get: {
            handler(ctx) {
                const params = ctx.params
                console.log(params)
                return 'Get customers By Id ' + params.id
            }
        },
        create: {
            handler(ctx) {
                const payload = ctx.params
                console.log(payload)
                return 'Post  customers'
            }
        },
        update: {
            handler(ctx) {
                return 'Update customers'
            }
        },
        remove: {
            handler(ctx) {
                return 'Remove  customers'
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
                    "REST customers": "customers",
                    "REST products": "products"
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