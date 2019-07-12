import app from './app'
import * as http from 'http'
import * as Utils from './utils/utils'
import * as db from './models/index'

const sequelizeServer = db.default
const server = http.createServer(app);
const port = Utils.normalizePort(process.env.port || 3001);

sequelizeServer.sequelize.authenticate()
    .then(() => {
        console.log('sucess')
    })
sequelizeServer.sequelize.sync()
    .then(() => {
        server.listen(port);
        server.on('error', Utils.onError(server))
        server.on('listening', Utils.onListening(server))
    })
