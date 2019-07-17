import * as Sequelize from 'sequelize'
import User from './UserModel';
import Application from './ApplicationModel';

export default class UserApplication extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
          id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            
        },
        applicationId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, { 
            sequelize,
            tableName: 'TR.UserApplication'
        } 
    )};

    static associations: {
        userId: Sequelize.Association<User, UserApplication>
        applicationId: Sequelize.Association<Application, UserApplication>
    }
}