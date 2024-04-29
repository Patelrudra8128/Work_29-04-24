const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const UserSchema = sequelize.define('User',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull: false
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type: DataTypes.STRING,
        allowNull : false
    }
});

sequelize.sync().then(()=>{
    console.log("User table created");
}).catch((err)=>{
    console.log("User table not created",err);
});

module.exports = UserSchema;