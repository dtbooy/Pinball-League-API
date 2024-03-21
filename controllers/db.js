import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'



// config method reads env file and sets up envioronment variables
dotenv.config()

// database connection
const sequelize = new Sequelize(process.env.DB_URI)



// test db connection works
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

export { sequelize }
