import * as Sequelize from 'sequelize'
import User from './UserModel'
export default class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          body: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          author: {
              type: Sequelize.INTEGER,
          }
        }, { sequelize })
    };

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'author',
                name: 'author'
            }
        });
    }
}
