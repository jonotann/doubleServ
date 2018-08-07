// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("You 2 gud, Server listening on: http://localhost:" + PORT);
});

//-------------------------------------------------------------------------



//SECOND SERVER FUNCTION
function handleRequest2(request, response) {

    response.end("Second Server Works! Path hit: " + request.url);
};
//SECOND HANDLER
var server2 = http.createServer(handleRequest);
//SECOND SERVER LISTEN
server2.listen(PORT2, function() {

    // Logs on the second server
    console.log("You suk, Server listening on: http://localhost: " + PORT2);
});
