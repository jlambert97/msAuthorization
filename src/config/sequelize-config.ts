import { Options } from 'sequelize';

interface SequelizeConfig {
    username: string
    password: string
    database: string
    options: Options
}

export const Development: SequelizeConfig = {
    username: "root",
    password: "JLambert1997",
    database: "wampmysqld64",
    options: {
        host: "127.0.0.1",
        dialect: "mysql"
    }
}