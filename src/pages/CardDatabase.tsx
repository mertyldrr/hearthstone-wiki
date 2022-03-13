import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCardsRequest } from '../redux/actions/cards';
import CardList from '../components/CardList';
import Layout from '../components/Layout';

const CardDatabase = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardsRequest(12));
  }, [dispatch]);

  return (
    <Layout>
      <CardList />
    </Layout>
  );
};

export default CardDatabase;
