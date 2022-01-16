import { dynamoClient, dynamoDB } from '../../config/dynamo';

const TABLE_NAME = 'HS_CARDS';

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

export const getCards = async (
  page: number,
  pageSize: number,
  lastEvaluatedKey?: object
) => {
  const params = {
    TableName: TABLE_NAME,
    Limit: pageSize,
  };
  if (lastEvaluatedKey) {
    // @ts-ignore
    params.ExclusiveStartKey = { cardId: lastEvaluatedKey };
  }

  try {
    const cards = await dynamoClient.scan(params).promise();
    return cards;
  } catch (error) {
    console.log(error);
  }
};

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
