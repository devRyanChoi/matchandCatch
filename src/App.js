import React from 'react';
import { Navbar, Auction, Main, Application, Footer} from './components';
import useApplicationData from "./hooks/useApplicationData";
import './App.css';


export default function App() {
  const { state, setAuction, makeBid, selectBid} = useApplicationData(); 
  return(
  <div>
    <Navbar />
    <Application state={state} setAuction={setAuction} makeBid={makeBid} selectBid={selectBid}/>
  </div>);
}

