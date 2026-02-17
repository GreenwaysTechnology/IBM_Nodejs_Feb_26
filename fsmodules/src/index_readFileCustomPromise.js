const fs = require('node:fs')


//promise based - custom promise
function readFileAsync() {
    return new Promise((resolve, reject) => {
        const filePath = './src/assets/info.txt'
        const options = {
            encoding: 'UTF-8'
        }
        fs.readFile(filePath, options, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

async function main() {
    // readFileAsync()
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    try {
        const data = await readFileAsync()
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}
main()
