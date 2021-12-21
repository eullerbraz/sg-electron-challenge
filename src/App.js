import React from 'react';
import Provider from './context/Provider';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <Provider>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
