const http = require('http')

let visited = 0
const server = http.createServer((req, res) => {
    visited++
    console.log(`website visited ${visited} times`)
    res.end('hello')
})

server.listen(5000, () => {
    console.log('Server listeting on port 5000...')
})