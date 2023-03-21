import React from 'react';


import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Auction } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Auction />
  </div>
);

export default App;
