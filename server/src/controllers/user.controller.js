const router = require("express").Router();
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

// Cognito Stuff
const cognitoPoolData = {
  UserPoolId: process.env.COGNITO_GROUP_ID,
  ClientId: process.env.COGNITO_CLIENT_ID,
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(cognitoPoolData);

router.get("/", function (req, res) {
  res.send("User");
});

router.post("/", function (req, res) {
  let cognitoParameters = [];

  cognitoParameters.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "name",
      Value: "Agustin",
    })
  );

  cognitoParameters.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "family_name",
      Value: "Franco",
    })
  );

  cognitoParameters.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "address",
      Value: "Direccion",
    })
  );

  //attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"custom:scope",Value:"admin"}));

  userPool.signUp(
    "afranco@test.com",
    "asd123asd",
    cognitoParameters,
    null,
    function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      cognitoUser = result.user;
      console.log("user name is " + cognitoUser.getUsername());
    }
  );

  res.send('OK');
});

module.exports = router;
