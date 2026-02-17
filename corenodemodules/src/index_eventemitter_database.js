const { EventEmitter } = require('node:events')

class Database extends EventEmitter {
    constructor() {
        super()
        //register all database related events
        this.on('connect', ({ url }) => {
            console.log(`Connected to ${url}`)
        })
        this.on('data', ({ result }) => {
            console.log('Got Result',result)
        })
        this.on('error', ({ err }) => {
            console.log(`Got Err ${err}`)
        })
    }
    //biz methods
    connect(url) {
        //simulate async connection using timer
        setTimeout(() => {
            this.emit('connect', { url })
        }, 500)
    }

    query(sql) {
        try {
            setTimeout(() => {
                const result = [{ id: 1, name: 'a' }]
                this.emit('data', { result })
            }, 800)
        }
        catch (err) {
            this.emit('error', err)
        }
    }
}

function main() {
    const db = new Database()
    db.connect('postgress:localhost/mydb')
    db.query('Select *from users')
}
main()