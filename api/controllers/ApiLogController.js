const ApiLog = require('../models/ApiLog');
const twilio = require('../../twilio')
const ApiLogController = () => {
    const getApiLogs = async (req, res) => {
        const areaCode = req.params.areaCode || 510;
        const limit = req.params.limit || 5;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


        twilio.availablePhoneNumbers('US')
            .local
            .list({areaCode: areaCode, limit: limit})
            .then(local => {
                ApiLog.bulkCreate(local.map(l => {
                    return {available_numbers: l.friendlyName, area_code: areaCode, ip: ip}
                }))
                return local;
            })
            .then(local => res.status(200).json({success: true, numbers: local.map(l => l.friendlyName)}));
    }
    return {
        getApiLogs
    }
}

module.exports = ApiLogController;