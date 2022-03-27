import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { Container, HeaderList, HeaderLink } from './styles/Header.styled';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Container>
      <Box>
        <AppBar>
          <Toolbar sx={{ backgroundColor: '#009AE4' }}>
            <IconButton size='large' edge='start' color='inherit'>
              <MenuIcon />
            </IconButton>
            <Typography
              component='div'
              style={{
                flexGrow: 0.3,
                fontSize: 28,
                fontFamily: 'BelweMedium',
                marginLeft: 30,
              }}
            >
              Hearthstone Wiki
            </Typography>
            <HeaderList>
              <li>
                <HeaderLink component={RouterLink} to='/cards'>
                  Card Database
                </HeaderLink>
              </li>
              <li>
                <HeaderLink component={RouterLink} to='/cardbacks'>
                  Cardbacks
                </HeaderLink>
              </li>
              <li>
                <SearchBar />
              </li>
            </HeaderList>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Header;
