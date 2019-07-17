import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import schemaQl from './graphql/schema'
import database from './config/db-config'

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
    }

    private middleware(): void {
        this.express.use('/graphql', 
        
        (req, res, next) => {
            req['context'] = {};
            req['context'].db = database
            next()
        },
        
        graphqlHTTP((req) => ({
            schema: schemaQl,
            graphiql: true,
            context: req['context']
        })))
    }
}

export default new App().express