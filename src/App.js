import React from 'react';
import { AboutUs, Multistep, Footer, Gallery, Header, Intro, FinalizingTransaction, SpecialMenu } from './container';
import { Navbar, Inventory, Main, Application} from './components';

import './App.css';


export default function App() {
  return(
  <div>
    <Navbar />
    <Main/>
    <Application/>
  </div>);
}

