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

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`

const resolvers = {
    Query: {
        users: () => users
    },
    Mutation: {
        createUser: (parent, data) => {
            const newUser = Object.assign({id: users.length + 1}, data);
            users.push(newUser);
            return newUser;
        }
    }
};


export default makeExecutableSchema({typeDefs, resolvers});