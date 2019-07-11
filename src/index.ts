import app from './app'
import * as http from 'http'
import * as Utils from './utils/utils'

const server = http.createServer(app);
const port = Utils.normalizePort(process.env.port || 3001);

server.listen(port);
server.on('error', Utils.onError(server))
server.on('listening', Utils.onListening(server))
