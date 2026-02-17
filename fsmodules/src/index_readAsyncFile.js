const fs = require('node:fs')

function blockMe(message) {
    console.log(message)
}

function main() {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    blockMe('start')
    fs.readFile(filePath, options, (err, data) => {
        if (err) throw err
        console.log(data)
    })
    blockMe('end')
}
main()
