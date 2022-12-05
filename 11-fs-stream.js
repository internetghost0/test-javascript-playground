const fs = require("fs")
const http = require("http")

let path = "./content/big.txt"

// read a file via stream example
function simpleExample() {
    // by default the size of buffer = 64kb
    // highWaterMark - control size of buffer
    // const stream = createReadStream('./content/big.txt')
    // const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
    // const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })

    const stream = fs.createReadStream(path, {
        encoding: "utf8",
    })

    stream.on("data", (result) => {
        console.log(result)
    })

    stream.on("error", (err) => {
        console.log(err)
    })
}

// simple method (not recommened)
function http_sendFullFileExample() {
    http.createServer(function (req, res) {
        const text = fs.readFileSync(path, "utf8")
        res.end(text)
    }).listen(5000)
}

// chunked method (recommended)
function http_sendChunkedFileExample() {
    http.createServer(function (req, res) {
        const fileStream = fs.createReadStream(path, 'utf8')
        fileStream.on('open', (result) => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end("Something wend wrong :(")
            console.log(err)
        })
    }).listen(5000)
}

http_sendChunkedFileExample()