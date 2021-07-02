const CognitoExpress = require("cognito-express");
const ResponseHelper = require("../helpers/responseHelper");

const cognitoExpress = new CognitoExpress({
    region: "us-east-2",
    cognitoUserPoolId: process.env.COGNITO_GROUP_ID,
    tokenUse: "access",
    tokenExpiration: 3600000,
});

const cognitoMiddleware = (req, res, next) => {
    res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credential", "true");
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");    

    if (req.method !== "OPTIONS") {
        let accessTokenFromClient = req.headers["authorization"];

        if (!accessTokenFromClient) {
            return ResponseHelper.createNotAuthorizedResponse(res);
        }

        cognitoExpress.validate(accessTokenFromClient, function (err, response) {
            if (!err) {
                return ResponseHelper.createNotAuthorizedResponse(res);
            }

            next();
        });
    }
};

module.exports = cognitoMiddleware;
