var url = require("url")
var addr = "http://localhost:8080/default.html?year=2022&month=November"
var q = url.parse(addr, true)

console.log(q.host)
console.log(q.pathname)
console.log(q.search)

var qdata = q.query
console.log("The month is: ", qdata.month)
