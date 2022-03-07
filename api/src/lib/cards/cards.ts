import { dynamoClient, dynamoDB } from '../../config/dynamo';

const TABLE_NAME = 'HS_CARDS';

interface getCardsParamsObject {
  TableName: string;
  Limit: number;
  ExclusiveStartKey?: object;
}

/*
 * Fetch table size(item count).
 */
export const getTableLength = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  try {
    const description = await dynamoDB.describeTable(params).promise();
    return description.Table.ItemCount;
  } catch (error) {
    console.log(error);
  }
};

/*
 * Fetch all cards, limited with page size.
 */
export const getCards = async (pageSize: number, lastEvaluatedKey?: object) => {
  const params: getCardsParamsObject = {
    TableName: TABLE_NAME,
    Limit: pageSize,
  };
  if (lastEvaluatedKey) {
    params.ExclusiveStartKey = { cardId: lastEvaluatedKey };
  }

  try {
    const cards = await dynamoClient.scan(params).promise();
    return cards;
  } catch (error) {
    console.log(error);
  }
};

/*
 * Fetch single card by id.
 */
export const getCardById = async (cardId: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      cardId,
    },
  };
  try {
    const card = await dynamoClient.get(params).promise();
    return card;
  } catch (error) {
    console.log(error);
  }
};

/* 
  * Update a card, if not exists create new card.
  TODO: implement a use case to test function.
*/
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
