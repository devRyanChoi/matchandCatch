import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SubHeading } from '..';
import {images} from '../../constants';
import './Main.css';

const Main = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="We make selling your car easy, fast, and fair."/>
      <h1 className='app__header-h1'>Are you looking to sell your car?</h1>
      <p className='p__opensans' styLe={{margin: '2rem 0'}}></p>
      <button type="button" className='custom__button'>Sell your car</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.car1} alt="header img" />
    </div>
  </div>
);

export default Main;
