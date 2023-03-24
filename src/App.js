import React from 'react';
import { Navbar, Inventory, Main, Application} from './components';
import useApplicationData from "./hooks/useApplicationData";
import './App.css';


export default function App() {
  const { state, setAuction} = useApplicationData(); 
  return(
  <div>
    <Navbar />
    <Application state={state} setAuction={setAuction}/>
  </div>);
}

