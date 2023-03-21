import React from 'react';
import { AboutUs, Multistep, Footer, Gallery, Header, Intro, FinalizingTransaction, SpecialMenu } from './container';
import { Navbar, Inventory } from './components';

import './App.css';

const test = [
  {
    id:1,
    seller_id:1,
    Maker: 'BMW',
    MODE: 'X3',
    Year: 2020,
    Milage: 'https://i.imgur.com/xT48JyM.jpeg'
  },
  {
    id:2,
    seller_id:2,
    Maker: 'AUDI',
    MODE: 'R8',
    Year: 2020,
    Milage: 'https://i.imgur.com/xT48JyM.jpeg'
  },
  {
    id:3,
    seller_id:1,
    Maker: 'Mercedes-Benz',
    MODE: 'Maybach',
    Year: 2020,
    Milage: 'https://i.imgur.com/xT48JyM.jpeg'
  },
  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    MODE: 'Civi',
    Year: 2020,
    Milage: 'https://i.imgur.com/xT48JyM.jpeg'
  },
];

const App = () => (
  <div>
    <Navbar />
    <Inventory source={test}/>
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
