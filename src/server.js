var httpServer = require('http-server -c-1')
var path = require('path')

var pathToStaticFiles = path.join(__dirname + '/public')

var server = httpServer.createServer({root: pathToStaticfiujFiles})
server.listen(9292)
