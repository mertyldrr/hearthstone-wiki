import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./theme/GlobalStyle";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <div className="App">hello ts</div>
    </Fragment>
  );
};

export default App;
