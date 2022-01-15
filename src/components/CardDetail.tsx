import React, { Fragment } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/store/rootReducer';
import {
  SingleCardContainer,
  StyledCross,
  LabelText,
  AttributeText,
} from './styles/CardDetail.styled';

interface PropTypes {
  handleCloseModal: () => void;
}

const CardDetail = ({ handleCloseModal }: PropTypes) => {
  const card = useSelector((state: GlobalState) => state.card.card);

  return (
    <Fragment>
      <StyledCross size={70} onClick={handleCloseModal} />
      <SingleCardContainer>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box style={{ flex: 1, textAlign: 'center' }}>
            <Typography
              style={{
                textAlign: 'center',
                fontFamily: 'BelweBoldBT',
                color: 'white',
                fontSize: 48,
                textShadow: 'black 4px 4px 15px',
              }}
              id='modal-modal-title'
              variant='h6'
              component='h2'
            >
              {card.name}
            </Typography>
            <img
              src={`${card.img}?fit=crop&auto=format`}
              srcSet={`${card.img}?fit=crop&auto=format&dpr=2 1x`}
              alt={card.name}
            />
          </Box>
          <Box
            style={{
              padding: 10,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <AttributeText>
              <LabelText>Flavor Text: </LabelText> {card.flavor}
            </AttributeText>
            <AttributeText>
              <LabelText>Class: </LabelText> {card.playerClass}
            </AttributeText>
            <AttributeText>
              <LabelText>Set: </LabelText> {card.cardSet}
            </AttributeText>
            <AttributeText>
              <LabelText>Faction: </LabelText> {card.faction}
            </AttributeText>
            <AttributeText>
              <LabelText>Rarity: </LabelText> {card.rarity}
            </AttributeText>
          </Box>
        </Box>
      </SingleCardContainer>
    </Fragment>
  );
};

export default CardDetail;
