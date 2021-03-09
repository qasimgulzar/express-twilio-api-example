const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'GET /twilio_logs': 'ApiLogController.getApiLogs',
};

module.exports = privateRoutes;
