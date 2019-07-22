import * as Sequelize from 'sequelize'
import * as bcrypt from 'bcryptjs'

export default class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
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
        }
    }
    }, { 
            sequelize,
            hooks: {
                beforeCreate: (user: any): void => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt)
                }
            },
            tableName: 'TB.User' 
        } 
    )}
}


export function findUsers() {
    return User.findAll()
}

export function createNewUser(data) {
    User.create(data);
}