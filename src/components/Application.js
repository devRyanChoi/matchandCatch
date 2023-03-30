import SubHeading from './SubHeading/SubHeading';
import Footer from './Footer/Footer';
import MenuItem from './Menuitem/MenuItem';
import Navbar from './Navbar/Navbar';
import Inventory from './Inventory/Inventory';
import Auction from './Auction/Auction';
import Main from './Main/Main';
import PastAuction from './PastAuction/PastAuction';
import MyAuction from './MyAuction/MyAuction';
import Leaderboard from './Leaderboard/Leaderboard';
import { Routes, Route } from 'react-router-dom';
import Transactions from './Transactions/Transactions';
import {useState} from 'react';
import Signin from './Signin/Signin';

import Register from './Stepper/InformationForm/Register';
import VehicleImage from './Stepper/Uploader/VehicleImage';
import CompleteForm from './Stepper/completeForm/CompleteForm';
import AApraisalForm from './Stepper/AppraisalForm/AApraisalForm';
export {
  SubHeading,
  Leaderboard,
  Footer,
  Auction,
  Main,
  MenuItem,
  Inventory,
  Navbar,
  PastAuction,
  MyAuction,
  Signin
};


export default function Application(props) {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Main currentuser={props.state.currentuser}/>}></Route>
      <Route exact path='/pastAuction' element={<PastAuction {...props}/>}></Route>
      <Route exact path='/leaderboard' element={<Leaderboard/>}></Route>
      <Route exact path='/myAuction' element={<MyAuction {...props} />}></Route>
      <Route exact path='/inventory/' element={<Inventory {...props}/>}></Route>
      <Route exact path='/transactions/:id' element={<Transactions {...props}/>}></Route>
      <Route exact path='/inventory/:id' element={<Auction {...props}/>}></Route>
      <Route exact path='/signin' element={<Signin seller={props.state.sellers} 
       dealer={props.state.dealers} setLogin={props.setLogin} removeLogin={props.removeLogin}/>}></Route>

      <Route exact path='/register' element={<Register currentuser={props.state.currentuser} registerCar={props.registerCar} length={props.state.vehicles.length}/>}></Route>
      <Route exact path='/register/image' element={<VehicleImage currentuser={props.state.currentuser} registerCar={props.registerCar} length={props.state.vehicles.length}/>}></Route>
      <Route exact path='/register/complete' element={<CompleteForm />}></Route>
      <Route exact path='/register/ApraisalForm' element={<AApraisalForm />}></Route>
    </Routes>
  );
};
