var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var server = http.createServer(handleRequest1);
var server = http.createServer(handleRequest2);

function handleRequest1(request, response){
    console.log("You look cool!")
}

function handleRequest2(request, response){
    console.log("I don't like how cool you look.")
}

server.listen(PORT1, function(){
    console.log("Server listening on: "  + "http://localhost:%s", PORT1);
});

server.listen(PORT2, function(){
    console.log("Server listening on: " + "http://localhost:%s", PORT2)
});