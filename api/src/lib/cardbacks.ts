import { dynamoClient } from '../config/dynamo';

const TABLE_NAME = 'HS_CARDBACKS';

interface getCardbacksParamsObject {
  TableName: string;
  Limit: number;
  ExclusiveStartKey?: object;
}

/**
 * * Fetch all cardbacks, limited with page size.
 */
export const getCardbacks = async (
  limit: number,
  lastEvaluatedKey?: string
) => {
  const params: getCardbacksParamsObject = {
    TableName: TABLE_NAME,
    Limit: limit,
  };
  if (lastEvaluatedKey) {
    params.ExclusiveStartKey = { cardbackId: lastEvaluatedKey };
  }
  try {
    const cardbacks = await dynamoClient.scan(params).promise();
    return cardbacks;
  } catch (error) {
    console.log(error);
  }
};

/**
 * * Fetch single cardback by id.
 */
export const getCardbackById = async (cardBackId: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      cardBackId,
    },
  };
  try {
    const cardback = await dynamoClient.get(params).promise();
    return cardback;
  } catch (error) {
    console.log(error);
  }
};

/**
 * * Update a cardback, if not exists create new cardback.
 */
export const addOrUpdateCardback = async (cardback: object) => {
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
