import { GlobalState } from '../redux/store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { ImageList, ImageListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { fetchMoreCardsRequest } from '../redux/actions/cards';
import { fetchSingleCardRequest } from '../redux/actions/singleCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ICard } from '../redux/types/cards';

const CardList = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: GlobalState) => state.cards.cards);
  const totalCards = useSelector(
    (state: GlobalState) => state.cards.itemCount
  ) as number;
  const lastKey = useSelector((state: GlobalState) => state.cards.lastKey);
  const searchText = useSelector(
    (state: GlobalState) => state.cards.searchText
  );

  const handleOnClick = (cardId: string) => {
    dispatch(fetchSingleCardRequest(cardId));
  };

  const handleFetch = (limit: number, lastKey?: string) => {
    dispatch(fetchMoreCardsRequest(limit, lastKey));
  };

  const searchResultCards = cards.filter((card: ICard) => {
    if (!searchText) {
      return cards;
    }
    return card.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const mapCards = searchResultCards.map(
    (card: ICard) =>
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
    <InfiniteScroll
      dataLength={mapCards.length} //This is important field to render the next data
      next={() => handleFetch(12, lastKey)}
      hasMore={cards.length < totalCards}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <ImageList cols={6} rowHeight={360}>
        {mapCards}
      </ImageList>
    </InfiniteScroll>
  );
};

export default CardList;
