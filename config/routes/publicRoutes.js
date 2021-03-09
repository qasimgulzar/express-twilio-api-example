const publicRoutes = {
    'POST /user': 'UserController.register',
    'POST /register': 'UserController.register', // alias for POST /user
    'POST /login': 'UserController.login',
    'POST /validate': 'UserController.validate',
    'GET /twilio_logs': 'ApiLogController.getApiLogs',
};

module.exports = publicRoutes;
