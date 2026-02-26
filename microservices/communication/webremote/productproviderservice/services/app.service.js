const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP"
})

//back end service
broker.createService({
    name: 'productproviderservice',
    actions: {
        findAll: {
            async handler(ctx) {
                const products = await fetch('https://dummyjson.com/products')
                const jsonProducts = await products.json()
                return jsonProducts
            }
        },
        findById: {
            async handler(ctx) {
                const id = +ctx.params.id
                const product = await fetch(`https://dummyjson.com/products/${id}`)
                const jsonProduct = await product.json()
                return jsonProduct
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