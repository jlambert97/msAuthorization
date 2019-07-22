import * as Sequelize from 'sequelize';
import ApplicationModel from '../models/ApplicationModel'
import UserModel from '../models/UserModel'
import UserApplicationModel from '../models/UserApplication';

// const developmentDb = new Sequelize.Sequelize('db', 'root', 'JLambert1997', {
//     dialect: "mysql",
//     host: "127.0.0.1",
//     port: 3306
// });
const developmentDb = new Sequelize.Sequelize('mysql://root:JLambert1997@localhost:3306/db');

export interface IModels {
  Application: Sequelize.Model
  User: void
  UserApplication: void
}

const models = {
    Application: ApplicationModel.init(developmentDb),
    User: UserModel.init(developmentDb),
    UserApplication: UserApplicationModel.init(developmentDb)
  };

const database = {
    ...models,
    developmentDb
};

export default database