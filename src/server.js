const Hapi = require('@hapi/hapi')
const routes = require('./routes')
const process = require('process')

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? '127.0.0.1' : '172.31.36.19',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    })

    server.route(routes)

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()