const userTypes = `
    type User {
        id: ID!
        name: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    }

    input UserCreate {
        name: String!
        email: String!
        password: String!
    }

    input UserUpdatePassword {
        password: String!
    }
`

const userQueries = `
    users(first: Int, offset: Int): [ User! ]!
    user(id: ID!): User
`

const userMutations = `
    createUser(input: UserCreate!): User
    updatePassword(id: ID!, input: UserUpdatePassword!): Boolean
`

export {
    userTypes,
    userQueries,
    userMutations,
}