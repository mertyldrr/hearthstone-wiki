import { GlobalState } from '../redux/store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { ImageList, ImageListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { fetchMoreCardbacksRequest } from '../redux/actions/cardbacks/cardbacks';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ICardback } from '../redux/types/common';
import { Oval } from 'react-loader-spinner';

const CardbackList = () => {
  const dispatch = useDispatch();
  const cardbacks = useSelector(
    (state: GlobalState) => state.cardbacks.cardbacks
  );
  const lastKey = useSelector((state: GlobalState) => state.cardbacks.lastKey);
  const searchText = useSelector(
    (state: GlobalState) => state.cardbacks.searchText
  );

  const handleOnClick = (cardbackId: string) => {
    // dispatch(fetchSingleCardbackRequest(cardbackId));
  };

  const handleFetch = (limit: number, lastKey?: string) => {
    dispatch(fetchMoreCardbacksRequest(limit, lastKey));
  };

  const searchResultCardbacks = cardbacks.filter((cardback: ICardback) => {
    if (!searchText) {
      return cardbacks;
    }
    return cardback.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const mapCardbacks = searchResultCardbacks.map(
    (cardback: ICardback) =>
      cardback.img && (
        <ImageListItem key={cardback.cardBackId}>
          <Link
            to={`/cardbacks/${cardback.cardBackId}`}
            onClick={() => handleOnClick(cardback.cardBackId)}
          >
            <img
              src={`${cardback.img}?w=348&h=500&fit=crop&auto=format`}
              srcSet={`${cardback.img}?w=348&h=500&fit=crop&auto=format&dpr=2 1.7x`}
              alt={cardback.name}
            />
          </Link>
        </ImageListItem>
      )
  );

  return (
    <InfiniteScroll
      dataLength={mapCardbacks.length}
      next={() => handleFetch(18, lastKey)}
      hasMore={true}
      loader={
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Oval
            ariaLabel='loading-indicator'
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color='#73471C'
            secondaryColor='white'
          />
        </div>
      }
    >
      <ImageList style={{ padding: 20 }} cols={6} rowHeight={340}>
        {mapCardbacks}
      </ImageList>
    </InfiniteScroll>
  );
};

export default CardbackList;
