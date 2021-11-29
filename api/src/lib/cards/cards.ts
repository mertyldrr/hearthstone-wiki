import { dynamoClient } from "../../config/dynamo";

const TABLE_NAME = "HS_CARDS";

const getCards = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  try {
    const characters = await dynamoClient.scan(params).promise();
    console.log(characters);
    return characters;
  } catch (error) {
    console.log(error);
  }
};

const cardx = {
  cardId: "10",
  name: "abc",
  type: "water",
};

const addCard = async (card: object) => {
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

addCard(cardx);
// getCards();

module.exports = {
  getCards,
  addCard,
};
