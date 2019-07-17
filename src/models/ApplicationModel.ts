import * as Sequelize from 'sequelize'

export default class Application extends Sequelize.Model {
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
       url: {
           type: Sequelize.STRING(128),
           allowNull: false
       },
       shortname: {
        type: Sequelize.STRING(3),
        allowNull: false
      }
    }, { 
      sequelize,
      tableName: 'TA.Application'
     })
  }
}
