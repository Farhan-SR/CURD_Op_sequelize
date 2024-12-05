const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    'crud_op', 'root', '', {
    
    port: 3306,
    dialect: 'mysql'
}
);

const dbConnection = async ()=>{
    try {
        await sequelize.authenticate();
        console.log("DB connected");
    } catch (error) {
        console.log("faild to db connect ")
    }
}

module.exports = {
    dbConnection, sequelize
}