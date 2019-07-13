import * as Sequelize from 'sequelize';
import CommentModel from '../models/CommentModel'
import UserModel from '../models/UserModel'

const developmentDb = new Sequelize.Sequelize('db', 'root', 'password', {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306
});


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