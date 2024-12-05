const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnect");

const UserModel = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    mobileNumber: DataTypes.INTEGER,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
    {
        freezeTableName: true
    })


module.exports = { UserModel }