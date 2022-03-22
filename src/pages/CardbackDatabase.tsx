import CardbackList from '../components/CardbackList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCardbacksRequest } from '../redux/actions/cardbacks/cardbacks';
import Layout from '../components/Layout';

const CardbackDatabase = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardbacksRequest(18));
  }, [dispatch]);
  return (
    <Layout>
      <CardbackList />
    </Layout>
  );
};

export default CardbackDatabase;
