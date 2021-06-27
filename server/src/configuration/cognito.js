const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

// Cognito Stuff
const cognitoPoolData = {
  UserPoolId: process.env.COGNITO_GROUP_ID,
  ClientId: process.env.COGNITO_CLIENT_ID,
  
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
// End Cognito Stuff
