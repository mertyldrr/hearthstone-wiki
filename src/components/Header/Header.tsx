import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { Container, HeaderList, HeaderLink } from "./styles";

const Header = () => {
  return (
    <Container>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 0.5, fontFamily: "BelweMedium" }}
            >
              Hearthstone Wiki
            </Typography>
            <HeaderList>
              <li>
                <HeaderLink component={RouterLink} to="/cards">
                  Card Database
                </HeaderLink>
              </li>
              <li>
                <HeaderLink component={RouterLink} to="/cardbacks">
                  Cardbacks
                </HeaderLink>
              </li>
            </HeaderList>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Header;
