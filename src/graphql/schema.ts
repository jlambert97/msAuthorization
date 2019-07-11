import { makeExecutableSchema } from 'graphql-tools'

const users: any[] = [
    {
        id: 1,
        name: 'xaxa',
        email: 'xaxa@email.com'
    },   
    {
        id: 2,
        name: 'xexe',
        email: 'xexe@email.com'
    }
]

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        users: [User!]!
    }
`

const resolvers = {
    Query: {
        users: () => users
    }
};


export default makeExecutableSchema({typeDefs, resolvers});