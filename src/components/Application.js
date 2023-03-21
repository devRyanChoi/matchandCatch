import SubHeading from './SubHeading/SubHeading';
import Newsletter from './Footer/Newsletter';
import FooterOverlay from './Footer/FooterOverlay';
import MenuItem from './Menuitem/MenuItem';
import Navbar from './Navbar/Navbar';
import Inventory from './Inventory/Inventory';
import Main from './Main/Main';
import { Routes, Route } from 'react-router-dom';
export {
  SubHeading,
  Newsletter,
  FooterOverlay,
  Main,
  MenuItem,
  Inventory,
  Navbar,
};

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

export default function Application(props) {
    return (
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Main/>}></Route>
        <Route exact path='/inventory' element={<Inventory source={test}/>}></Route>
      </Routes>
    );
};