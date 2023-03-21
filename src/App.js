import React from 'react';
import { AboutUs, Multistep, MCInventory, Footer, Gallery, Header, Intro, FinalizingTransaction, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <MCInventory />
    {/* <FinalizingTransaction /> */}
    {/* <Multistep /> */}
    {/* <AboutUs />
    <SpecialMenu />

    <Intro />
    
    <Gallery />
    
    <Footer /> */}
  </div>
);

export default App;
