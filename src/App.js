import React from 'react';
import {Switch, Route} from "react-router-dom";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Home from "./components/Navbar"

const App = () => (
  return(
    <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/" component={Home}/>

    </>
  )
);

export default App;
{/* <div>
<Navbar />
<Header />
<AboutUs />
<SpecialMenu />
<Chef />
<Intro />
<Laurels />
<Gallery />
<FindUs />
<Footer />
</div> */}