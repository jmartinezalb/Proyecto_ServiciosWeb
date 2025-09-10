require('dotenv').config();
const Sequelize = require('sequelize'); 

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_host = process.env.DB_HOST;

const sequelize = new Sequelize(db_name, db_user, db_pass, { 
    host: db_host,
    dialect: 'mysql',
    /*logging: false, 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }*/
});

sequelize.authenticate()
    .then(() => console.log("Conectado"))
    .catch(err => console.log("Error al conectar con la base de datos:", err));

module.exports = sequelize;