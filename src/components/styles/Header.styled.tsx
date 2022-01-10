import styled from 'styled-components';
import Link from '@mui/material/Link';
import SearchBar from 'material-ui-search-bar';

export const Container = styled.div``;

export const SearchBarStyled = styled((props) => <SearchBar {...props} />)`
  position: relative;
  &.MuiPaper-root {
    color: white;
    background-color: #ffffff;
  }
  &:hover {
    background-color: #d3d3d3;
  }
  width: 100%;
`;

export const HeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-grow: 8;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-right: 30px;
`;

export const HeaderLink = styled((props) => <Link {...props} />)`
  color: #ffea3e;
  text-decoration: none;
`;
