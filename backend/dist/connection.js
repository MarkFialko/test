"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_model_1 = require("./models/User.model");
const connection = new sequelize_typescript_1.Sequelize('YLDcvJaf', 'UYQtyQ', 'iRfDMkDpqiHimkVX', {
    dialect: 'mysql',
    host: '81.31.247.100',
    port: 3306,
    logging: false,
    models: [User_model_1.User],
    dialectModule: require('mysql2')
});
exports.default = connection;
