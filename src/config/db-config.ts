import * as Sequelize from 'sequelize';
import CommentModel from '../models/CommentModel'
import UserModel from '../models/UserModel'

// const developmentDb = new Sequelize.Sequelize('db', 'root', 'JLambert1997', {
//     dialect: "mysql",
//     host: "127.0.0.1",
//     port: 3306
// });
const developmentDb = new Sequelize.Sequelize('mysql://root:JLambert1997@localhost:3306/db');

const models = {
    Comment: CommentModel.init(developmentDb),
    User: UserModel.init(developmentDb)
  };

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));

const database = {
    ...models,
    developmentDb
};

export default database