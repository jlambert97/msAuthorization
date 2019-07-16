import * as Sequelize from 'sequelize'
import User from './UserModel';

interface IAplications extends Sequelize.Model {
  id: number
  nam: string 
}