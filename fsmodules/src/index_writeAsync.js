const fs = require('node:fs')

function blockMe(message) {
    console.log(message)
}

function main() {
    const filePath = './src/assets/data.txt'
    const options = {
        encoding: 'UTF-8'
    }
    const data = 'This is file data'
    blockMe('start')
    fs.writeFile(filePath, data, (err) => {
        if (err) throw err
        console.log(`File "${filePath}" created`)
    })
    blockMe('end')
}
main()
