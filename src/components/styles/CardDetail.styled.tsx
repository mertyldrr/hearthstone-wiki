import styled from 'styled-components';
import { Cross } from '@styled-icons/icomoon/Cross';
import { Box } from '@material-ui/core';

export const SingleCardContainer = styled((props) => <Box {...props} />)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  box-shadow: 24;
`;

export const StyledCross = styled(Cross)`
  color: gainsboro;
  float: right;
  padding: 40px 60px;
  :hover {
    cursor: pointer;
  }
`;

export const AttributeText = styled.p`
  font-size: 18px;
  color: black;
  display: inline;
  font-family: 'BelweMedium';
`;

export const LabelText = styled.p`
  font-size: 18px;
  color: white;
  display: inline;
  font-family: 'BelweMedium';
`;
