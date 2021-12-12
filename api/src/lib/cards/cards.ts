import { dynamoClient } from "../../config/dynamo";

const TABLE_NAME = "HS_CARDS";

export const getCards = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  try {
    const characters = await dynamoClient.scan(params).promise();
    return characters;
  } catch (error) {
    console.log(error);
  }
};

export const getCardById = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  try {
    const character = await dynamoClient.get(params).promise();
    return character;
  } catch (error) {
    console.log(error);
  }
};

export const addorUpdateCard = async (card: object) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Item: card,
    };
    return await dynamoClient.put(params).promise();
  } catch (error) {
    console.log(error);
  }
};
