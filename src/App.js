import React from 'react';
import { AboutUs, Multistep, Footer, Gallery, Header, Intro, FinalizingTransaction, SpecialMenu } from './container';
import { Navbar, Inventory } from './components';

import './App.css';

const test = [
  {
    id:1,
    seller_id:1,
    Maker: 'BMW',
    Model: 'X3',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/xT48JyM.jpeg'
  },
  {
    id:2,
    seller_id:2,
    Maker: 'AUDI',
    Model: 'R8',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/v7OHbHy.jpeg'
  },
  {
    id:3,
    seller_id:1,
    Maker: 'Mercedes-Benz',
    Model: 'SLS AMG',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/xT48JyM.jpeg'
  },
  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/v7OHbHy.jpeg'
  },

  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/v7OHbHy.jpeg'
  },

  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/v7OHbHy.jpeg'
  },

  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/v7OHbHy.jpeg'
  },

  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/v7OHbHy.jpeg'
  },

  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/v7OHbHy.jpeg'
  },
  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://i.imgur.com/v7OHbHy.jpeg'
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
