import React from 'react';
import { Button } from '@mui/material';
import { SubHeading } from '..';
import {images} from '../../constants';

import './Main.css';


const Main = () => (

  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="We make selling your car easy, fast, and fair."/>
      <h1 className='app__header-h1'>Are you <em>still</em> looking to sell your car?</h1>
      <p className='p__opensans' styLe={{margin: '2rem 0'}}></p>
      <Button type="button" 
      className='custom__button'
      href="/stepper"
      >
        Sell your car
        </Button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.car1} alt="header img" />
    </div>
  </div>
);

export default Main;
