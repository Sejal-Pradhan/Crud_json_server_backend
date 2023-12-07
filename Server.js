const jsonServer = require('json-server');
const server = jsonServer.create();
const defaults = jsonServer.defaults;
const routes = jsonServer.router('data.json');
const middlewares = [defaults({ type: 'GET' }), routes];
server.use(middlewares);
server.listen(3500, () => {
  console.log('JSON Server is running');
});