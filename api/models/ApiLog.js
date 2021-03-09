const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');


const tableName = 'api_logs';
const hooks = {}

const ApiLog = sequelize.define('ApiLog', {
    ip: {
        type: Sequelize.STRING,
    },
    area_code: {
        type: Sequelize.NUMBER,
    },
    available_numbers:{
        type: Sequelize.STRING,
    }
}, {hooks, tableName});

module.exports = ApiLog;