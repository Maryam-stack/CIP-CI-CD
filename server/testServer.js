const jsonServer = require('json-server')
const middleware = jsonServer.defaults()
const server = jsonServer.create()

server.use(middleware);
server.use(jsonServer.bodyParser);

const mockData = require("./data")

server.get('/api/mock', (req, res, nex) => {
  res.status(200).send(mockData.getBags)
})

server.listen(3000, () => {
  console.log('Fake server run on port 3000')
})
