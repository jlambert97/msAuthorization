import * as DatabasesEnv from '../config/sequelize-config'
import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'
import { DbConnection } from '../interfaces/DbConnectionInterface';
import User from './UserModel';

const env: string = process.env.ENVIRONMENT || 'development'
let db = null;

if(!db){
    db = {}

    const sequelize: Sequelize.Sequelize = new Sequelize.Sequelize(
        DatabasesEnv.Development.database,
        DatabasesEnv.Development.username,
        DatabasesEnv.Development.password,
        DatabasesEnv.Development.options
    )
    
    sequelize.sync({force: true})
        .then(() => {
            return User.create({
                User
            })
        })
    // fs
    //     .readdirSync(__dirname)
    //     .filter(file => (file.indexOf('.') !== 0) && (file !== "index.js") && (file.slice(-3) === '.js'))
    //     .forEach((file) => {
    //       const model = sequelize.import(path.join(__dirname, file));
    //       db[model.name] = model;
    //     });

    //     Object.keys(db).forEach((modelName) => {
    //         if (db[modelName].associate) {
    //             db[modelName].associate(db);
    //         }
    //     });

    db['sequelize'] = sequelize
}
export default <DbConnection>db