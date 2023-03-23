import React from 'react';
import { Navbar, Inventory, Main, Application} from './components';
import useApplicationData from "./hooks/useApplicationData";
import './App.css';


export default function App() {
  const { state} = useApplicationData(); 
  return(
  <div>
    <Navbar />
    <Application state={state}/>
  </div>);
}

