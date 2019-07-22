import { makeExecutableSchema } from 'graphql-tools'
import { Query } from './query';
import { Mutation } from './mutation';
import { userTypes } from './resources/user/schema';
import { userResolvers } from '../graphql/resources/user/resolver'

const resolvers = userResolvers
const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition, Query, Mutation,
        userTypes
], resolvers});
