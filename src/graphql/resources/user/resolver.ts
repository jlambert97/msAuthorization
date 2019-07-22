import { GraphQLResolveInfo } from "graphql";
import { IModels } from '../../../config/db-config'
import * as users from '../../../models/UserModel'

export const userResolvers = {

    Query: {
        users: (parent, args, {db}: {db: IModels}, info: GraphQLResolveInfo) => {
            return users.findUsers()
        }
    },

    Mutation: {
        createUser: (parent, {input}, {db}: {db: IModels}, info: GraphQLResolveInfo) => {
            console.log("xaxa")
            return users.createNewUser(input)
        }
    }
}