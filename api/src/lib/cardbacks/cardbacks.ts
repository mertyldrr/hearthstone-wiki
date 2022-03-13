import { dynamoClient } from '../../config/dynamo';

const TABLE_NAME = 'HS_CARDBACKS';

const addOrUpdateCardback = async (cardback: object) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Item: cardback,
    };
    return await dynamoClient.put(params).promise();
  } catch (error) {
    console.log(error);
  }
};
