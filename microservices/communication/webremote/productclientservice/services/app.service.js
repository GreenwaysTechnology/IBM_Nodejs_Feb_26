const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP"
})
//rest api
broker.createService({
    name: 'productclientservice',
    actions: {
        list: {
            //meta data
            rest: "GET /",
            async handler(ctx) {
                const products = await ctx.call('productproviderservice.findAll')
                return products
            }
        },
        get: {
            rest: "GET /:id",
            async handler(ctx) {
                const id = ctx.params.id
                const product = await ctx.call('productproviderservice.findById', { id: id })
                return product
            }
        },
        create: {
            rest: "POST /",
            handler(ctx) {
                const payload = ctx.params
                return payload
            }
        },
        update: {
            rest: "PUT /:id",
            handler(ctx) {
                const id = ctx.params.id
                return 'Update by Id' + id
            }
        },
        remove: {
            rest: "DELETE /:id",
            handler(ctx) {
                const id = ctx.params.id
                return 'Remove' + id
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
                autoAliases: true
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