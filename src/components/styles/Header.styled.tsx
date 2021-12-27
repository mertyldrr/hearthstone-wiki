import styled from "styled-components";
import Link from "@mui/material/Link";

export const Container = styled.div``;

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
