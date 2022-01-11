import { GlobalState } from '../redux/store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { ImageList, ImageListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { fetchSingleCardRequest } from '../redux/actions/singleCard';

const CardList = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: GlobalState) => state.cards.cards);
  const searchText = useSelector(
    (state: GlobalState) => state.cards.searchText
  );

  const handleOnClick = (cardId: string) => {
    dispatch(fetchSingleCardRequest(cardId));
  };

  const searchResultCards = cards.filter((card) => {
    if (!searchText) {
      return cards;
    }
    return card.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const mapCards = searchResultCards.map(
    (card) =>
      card.img &&
      card.type !== 'Hero Power' && (
        <ImageListItem key={card.cardId}>
          <Link
            to={`/cards/${card.cardId}`}
            onClick={() => handleOnClick(card.cardId)}
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
