import styled from 'styled-components';
import Link from '@mui/material/Link';

export const Container = styled.div``;

export const HeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const HeaderLink = styled((props) => <Link {...props} />)`
  color: #ffea3e;
  font-size: 18px;
  text-decoration: none;
`;
