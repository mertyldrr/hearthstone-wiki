import { AppState } from '../redux/store/rootReducer';
import { useSelector } from 'react-redux';
import { ImageList, ImageListItem } from '@material-ui/core';

const CardList = () => {
  const cards = useSelector((state: AppState) => state.cards.cards);
  console.log(cards);
  //console.log(cards.cards.Items);

  const mapCards = cards.map(
    (card) =>
      card.img &&
      card.type !== 'Hero Power' && (
        <ImageListItem key={card.cardId}>
          <img src={card.img} alt={card.name} />
        </ImageListItem>
      )
  );

  return (
    <ImageList cols={6} rowHeight={350}>
      {mapCards}
    </ImageList>
  );
};

export default CardList;
