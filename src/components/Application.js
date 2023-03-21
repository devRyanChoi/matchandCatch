import SubHeading from './SubHeading/SubHeading';
import Newsletter from './Footer/Newsletter';
import FooterOverlay from './Footer/FooterOverlay';
import MenuItem from './Menuitem/MenuItem';
import Navbar from './Navbar/Navbar';
import Inventory from './Inventory/Inventory';
import Auction from './Auction/Auction';
import Main from './Main/Main';
import { Routes, Route } from 'react-router-dom';
export {
  SubHeading,
  Newsletter,
  FooterOverlay,
  Auction,
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
    image: 'https://cdn.luxe.digital/media/20230105073805/fastest-cars-world-2023-list-ranking-luxe-digital-1200x600.jpg'
  },
  {
    id:2,
    seller_id:2,
    Maker: 'AUDI',
    Model: 'R8',
    Year: 2020,
    Milage: 120000,
    image: 'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg'
  },
  {
    id:3,
    seller_id:1,
    Maker: 'Mercedes-Benz',
    Model: 'SLS AMG',
    Year: 2020,
    Milage: 120000,
    image: 'https://carwow-uk-wp-1.imgix.net/McLaren-720S-1.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=1920'
  },
  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://carwow-uk-wp-3.imgix.net/Audi-R8-5.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=1920'
  },

  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://www.mynrma.com.au/-/media/2021-best-cars-ford-mustang-hero-mobile.jpg?h=360&w=640&hash=429e38fbefc48878a54438c21c98f863'
  },

  {
    id:4,
    seller_id:1,
    Maker: 'Honda',
    Model: 'Civic',
    Year: 2020,
    Milage: 120000,
    image: 'https://www.mynrma.com.au/-/media/2021-best-cars-ford-mustang-hero-mobile.jpg?h=360&w=640&hash=429e38fbefc48878a54438c21c98f863'
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
        <Route exact path='/inventory/:id' element={<Auction source={test}/>}></Route>
      </Routes>
    );
};