import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import CardDatabase from './pages/CardDatabase';
import CardbackDatabase from './pages/CardbackDatabase';
import GlobalStyle from './theme/GlobalStyle';
import Layout from './components/Layout';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/cards' element={<CardDatabase />}></Route>
        <Route path='/cardbacks' element={<CardbackDatabase />}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
