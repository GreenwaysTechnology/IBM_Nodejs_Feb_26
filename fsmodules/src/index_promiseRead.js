const fs = require('node:fs/promises')

async function main() {

    // fs.readFile(filePath, options)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    try {
        const filePath = './src/assets/info.txt'
        const options = {
            encoding: 'UTF-8'
        }
        const data = await fs.readFile(filePath, options)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
main()