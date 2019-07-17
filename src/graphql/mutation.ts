import { userMutations } from './resources/user/schema'


const Mutation = `
    type Mutation {
        ${userMutations}
    }
`

export {
    Mutation
}