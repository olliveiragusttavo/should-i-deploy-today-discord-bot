const http = require("http");

module.exports = http.createServer(async (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end("Server is running");
});
