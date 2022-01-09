import { AppState } from '../redux/store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { ImageList, ImageListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { fetchSingleCardRequest } from '../redux/actions/singleCard';

const CardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: AppState) => state.cards.cards);
  //console.log(cards);
  //console.log(cards.cards.Items);

  /*   const handleOnClick = (card: ICard) => {
    dispatch(fetchSingleCardRequest(card.cardId));
  } */

  const mapCards = cards.map(
    (card) =>
      card.img &&
      card.type !== 'Hero Power' && (
        <ImageListItem key={card.cardId}>
          <Link
            to={`/cards/${card.cardId}`}
            onClick={() => dispatch(fetchSingleCardRequest(card.cardId))}
          >
            <img
              src={`${card.img}?w=348&h=500&fit=crop&auto=format`}
              srcSet={`${card.img}?w=348&h=500&fit=crop&auto=format&dpr=2 1.5x`}
              alt={card.name}
            />
          </Link>
        </ImageListItem>
      )
  );

  return (
    <ImageList cols={6} rowHeight={360}>
      {mapCards}
    </ImageList>
  );
};

export default CardList;
