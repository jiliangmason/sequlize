/**
 * Created by Administrator on 2018/9/16 0016.
 */
import Sequelize from 'sequelize';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port || 3306,
  dialect: config.dialect || "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  //logging:false,
});

sequelize.authenticate().then((err)=> {
  console.log('Connection has been established successfully.');
}).catch((err)=> {
  console.log('Unable to connect to the database:', err);
});

export default sequelize;
