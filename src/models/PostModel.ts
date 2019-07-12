import * as Sequelize from 'sequelize'
import { User } from './UserModel';

export class Post extends Sequelize.Model {
    id?: number
    title?: string
    content?: string
    photo?: string
    author?: number
    createdAt?: string
    updatedAt?: string

    public static associations: {
        user: Sequelize.Association<User, Post>
    }
}

Post.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    photo: {
        type: Sequelize.BLOB({
            length: 'long'
        }),
        allowNull: false
    }
}, 
{
    tableName: 'Posts',
    sequelize: new Sequelize.Sequelize('mysql://root:JLambert1997@localhost:3306/wampmysqld64')
})

Post.belongsTo(User, {
    foreignKey: {
        allowNull: false,
        field: 'author',
        name: 'author'
    }
})
