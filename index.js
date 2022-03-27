const server = require('./src/server');

server.listen(443, () => {
  console.log('Server is listening on port 443');
});
