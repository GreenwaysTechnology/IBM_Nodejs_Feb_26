import { name } from "./lib/myutil.js"
import ProductService from "./services/product.service.js"

function main(){
   console.log(name)
   let productService = new ProductService()
   console.log(productService.findAll())
}
main()