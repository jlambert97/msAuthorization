import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import schemaQl from './graphql/schema'

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
    }

    private middleware(): void {
        this.express.use('/graphql', graphqlHTTP({
            schema: schemaQl,
            graphiql: true
        }))
    }
}

export default new App().express