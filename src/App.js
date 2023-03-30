import React from 'react';
import { Navbar, Application, Footer} from './components';
import useApplicationData from "./hooks/useApplicationData";
import './App.css';


export default function App() {
  const { state, setLogin, removeLogin, makeBid, selectBid,selectVehicle, registerCar} = useApplicationData(); 
  return(
  <div>
    <Navbar currentuser={state.currentuser} setLogin={setLogin} removeLogin={removeLogin}/>
    <Application state={state} setLogin={setLogin} removeLogin={removeLogin} makeBid={makeBid} selectBid={selectBid} selectVehicle={selectVehicle} registerCar={registerCar}/>
  </div>);
}

