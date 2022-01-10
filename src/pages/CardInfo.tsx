import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/store/rootReducer';

const CardInfo = () => {
  const card = useSelector((state: GlobalState) => state.card.card);
  return <div>{card.img}</div>;
};

export default CardInfo;
