import React from 'react';
import { AboutUs, formComponent, Footer, Gallery, Header, Intro, FinalizingTransaction, SpecialMenu,Carrequesting,LinearStepper } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <formComponent/>
    <LinearStepper/>
    {/* <Header /> */}
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
