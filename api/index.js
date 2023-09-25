import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)

server.listen(9000, () => {
	console.log('Server ready')
})

// export default server
