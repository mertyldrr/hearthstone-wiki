import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../redux/store/rootReducer';
import { fetchCardsRequest } from '../redux/actions/cards';
import CardList from '../components/CardList';
import Layout from '../components/Layout';
import { Button } from '@material-ui/core';

const CardDatabase = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardsRequest());
  }, [dispatch]);

  const lastKey = useSelector((state: GlobalState) => state.cards.lastKey);

  const handleFetch = (lastEvaluatedKey: object) => {
    dispatch(fetchCardsRequest(lastEvaluatedKey));
  };

  return (
    <Layout>
      <CardList />
      <Button onClick={() => handleFetch(lastKey as object)}>
        Next Page - Test
      </Button>
    </Layout>
  );
};

export default CardDatabase;
