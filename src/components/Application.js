import SubHeading from './SubHeading/SubHeading';
// import Newsletter from './Footer/Newsletter';
// import FooterOverlay from './Footer/FooterOverlay';
import Footer from './Footer/Footer';
import MenuItem from './Menuitem/MenuItem';
import Navbar from './Navbar/Navbar';
import Inventory from './Inventory/Inventory';
import Auction from './Auction/Auction';
import Main from './Main/Main';
import PastAuction from './PastAuction/PastAuction';
import MyAuction from './MyAuction/MyAuction';
import { Routes, Route } from 'react-router-dom';
import{useState} from 'react';
export {
  SubHeading,
  // Newsletter,
  // FooterOverlay,
  Footer,
  Auction,
  Main,
  MenuItem,
  Inventory,
  Navbar,
  PastAuction,
  MyAuction,
};


export default function Application(props) {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Main/>}></Route>
      <Route exact path='/pastAuction' element={<PastAuction {...props}/>}></Route>
      <Route exact path='/myAuction' element={<MyAuction {...props} />}></Route>
      <Route exact path='/inventory/' element={<Inventory {...props}/>}></Route>
      
      <Route exact path='/inventory/:id' element={<Auction {...props}/>}></Route>
    
    </Routes>
  );
};