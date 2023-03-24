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
  const vehicles = props.state.vehicles;
  const auctions = props.state.auctions;
  const dealers = props.state.dealers;
  const images = props.state.images;
  const transactions = props.state.transactions;
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Main/>}></Route>
      <Route exact path='/pastAuction' element={<PastAuction dealer={dealers} vehicle={vehicles} transaction={transactions}/>}></Route>
      <Route exact path='/myAuction' element={<MyAuction vehicle={vehicles} />}></Route>
      <Route exact path='/inventory/' element={<Inventory vehicle={vehicles} image={images}/>}></Route>
      
      <Route exact path='/inventory/:id' element={<Auction auction={auctions} vehicle={vehicles} dealer={dealers} image={images}/>}></Route>
    
    </Routes>
  );
};