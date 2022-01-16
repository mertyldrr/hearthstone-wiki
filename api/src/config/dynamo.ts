const AWS = require('aws-sdk');
require('dotenv').config();
const credentials = new AWS.SharedIniFileCredentials({ profile: 'hswiki' });
AWS.config.credentials = credentials;
AWS.config.update({ region: 'eu-central-1' });

export const dynamoClient = new AWS.DynamoDB.DocumentClient();
export const dynamoDB = new AWS.DynamoDB();
