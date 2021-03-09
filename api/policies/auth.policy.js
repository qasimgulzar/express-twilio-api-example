const JWTService = require('../services/auth.service');

// usually: "Authorization: Bearer [token]" or "token: [token]"
module.exports = (req, res, next) => {
    if (req.header('x_custom_auth')) {
        let x_custom_auth = req.header('x_custom_auth');

        if (process.env.auth_token_value != x_custom_auth) {
            res.status(401).json({msg: 'No Authorization was found'});
        }
    } else {
        res.status(401).json({msg: 'No Authorization was found'});
    }
    return next();
};
