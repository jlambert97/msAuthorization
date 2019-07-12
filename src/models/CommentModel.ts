import * as Sequelize from 'sequelize'
import { User } from './UserModel'
import { Post } from './PostModel'

export class Comment extends Sequelize.Model {
    id?: number
    comment: string
    post: number
    user: number
    createdAt?: string
    updatedAt?: string
}

Comment.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'Comments',
    sequelize: new Sequelize.Sequelize('mysql://root:JLambert1997@localhost:3306/wampmysqld64')
})

Comment.belongsTo(User, {
    foreignKey: {
        allowNull: false,
        field: 'user',
        name: 'user'
    }
})
Comment.belongsTo(Post, {
    foreignKey: {
        allowNull: false,
        field: 'post',
        name: 'post'
    }
})