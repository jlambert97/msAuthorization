import * as Sequelize from 'sequelize';
import * as bcrypt from 'bcryptjs'

export class User extends Sequelize.Model {
    id?: number
    name?: string
    email?: string
    password: string
    photo?: string
    createdAt?: string
    updatedAt?: string
}

User.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(128),
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    photo: {
        type: Sequelize.BLOB({
            length: 'long'
        }),
        allowNull: true,
        defaultValue: null
    }
},
{
    tableName: 'Users',
    sequelize: new Sequelize.Sequelize('mysql://root:JLambert1997@localhost:3306/wampmysqld64'),
    hooks: {
        beforeCreate: (user: User): void => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt)
        }
    }
})

export default User