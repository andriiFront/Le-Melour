import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <div className="App__container">
      <Main />
    </div>
  </div>
);

export default App;
