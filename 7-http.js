const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("<h1>welcome to the club, buddy</h1>")
  }
  else if (req.url === '/about') {
    res.end("<h1>about me?? nani</h1>")
  }
  else {
    res.end(`
    <h1>Oops 404!!</h1>
    <p> We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
  }
})

server.listen(5000)
