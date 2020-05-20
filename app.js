const http = require('http')    //require is a module to import http and we are storing it in http variable
const port = 3000               // this is the local host to which we will deploy our server 

const server = http.createServer(function(req, res){       // this function actually create the server it accepets two parameters
 res.write('Hello Node')    //req => request res=> response // whatever needes to go inside the server goes into this function
 res.end()
})

server.listen(port ,function(error){            // listen function is used to connect server to a port it accepts 2 parameters
    if(error) {
        console.log('something went wrong', error)
    }
    else {
        console.log('server is listening on port', port)
    }
})
