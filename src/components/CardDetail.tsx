import React, { Fragment } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/store/rootReducer';
import { SingleCardContainer } from './styles/CardDetail.styled';
import { StyledCross } from './styles/CardDetail.styled';

interface PropTypes {
  handleCloseModal: () => void;
}

const CardDetail = ({ handleCloseModal }: PropTypes) => {
  const card = useSelector((state: GlobalState) => state.card.card);

  return (
    <Fragment>
      <StyledCross size={70} onClick={handleCloseModal} />
      <SingleCardContainer>
        <Typography
          style={{
            textAlign: 'center',
            fontFamily: 'BelweBoldBT',
            color: 'white',
          }}
          id='modal-modal-title'
          variant='h6'
          component='h2'
        >
          {card.name}
        </Typography>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={`${card.img}?w=348&h=500&fit=crop&auto=format`}
            srcSet={`${card.img}?w=348&h=500&fit=crop&auto=format&dpr=2 1.5x`}
            alt={card.name}
          />
          {card.imgGold && (
            <img
              src={`${card.imgGold}?w=348&h=500&fit=crop&auto=format`}
              srcSet={`${card.imgGold}?w=348&h=500&fit=crop&auto=format&dpr=2 1.5x`}
              alt={card.name}
            />
          )}
          <Box>
            <Typography style={{ fontFamily: 'BelweBoldBT' }}>
              {card.cardId}
            </Typography>
            <Typography style={{ fontFamily: 'BelweBoldBT' }}>Test</Typography>
          </Box>
        </Box>
      </SingleCardContainer>
    </Fragment>
  );
};

export default CardDetail;
