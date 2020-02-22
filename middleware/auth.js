const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

module.exports = function (request, response, next) {
    //  Get token from the header
    const token = request.header('x-auth-token');

    //  Check token
    if (!token){
        return response.status(401).json({message:'No token! Access denied!'});
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);

        request.user = decoded.user;
        next();

    } catch (error) {
        return response.status(401).json({message:'Token is not valid!'});
    }
};