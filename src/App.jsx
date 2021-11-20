import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';

const App = () => (
  <div className="App">
    <Header />
    {false && <Main />}
  </div>
);

export default App;
