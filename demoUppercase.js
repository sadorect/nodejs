var http = require("http")
const { Http2ServerRequest } = require("http2")
var uc = require("upper-case")

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write(uc.upperCase("Hello World!"))
    res.end()
  })
  .listen(8080)

