const http = require("http");

module.exports = http.createServer((request, response) => {
  // response.writeHead(200, { "Content-Type": "application/json" });
  response.writeHead(200, { "Content-Type": "text/html" });

  response.end(JSON.stringify({body: "Hello World!"}));
});
