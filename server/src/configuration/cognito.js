const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

class Cognito {
  constructor() {
    this.poolData = {
      UserPoolId: process.env.COGNITO_GROUP_ID,
      ClientId: process.env.COGNITO_CLIENT_ID,
    };

    this.userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);
  }
  register = (registerForm) => {
    return new Promise((resolve, reject) => {
      let cognitoParameters = [];

      cognitoParameters.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({
          Name: "name",
          Value: registerForm.firstName,
        })
      );

      cognitoParameters.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({
          Name: "family_name",
          Value: registerForm.lastName,
        })
      );

      cognitoParameters.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({
          Name: "address",
          Value: `${registerForm.address.street} ${registerForm.address.number}, ${registerForm.address.city},  ${registerForm.address.province},  ${registerForm.address.country}`,
        })
      );

      this.userPool.signUp(
        registerForm.email,
        registerForm.password,
        cognitoParameters,
        null,
        (error, result) => {
          if (error) {
            console.log(error);
            reject(error);
            return;
          }

          resolve(result.user);
        }
      );
    });
  };
  authenticate = (userName, password) => {
    return new Promise((resolve, reject) => {
      let authenticationDetails =
        new AmazonCognitoIdentity.AuthenticationDetails({
          Username: userName,
          Password: password,
        });

      let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
        Username: userName,
        Pool: this.userPool,
      });

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          resolve(result.getIdToken());
        },
        onFailure: function (err) {
          reject(err.message);
        },
      });
    });
  };
}

module.exports = Cognito;
