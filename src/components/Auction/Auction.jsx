import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import './Auction.css';
import Infobox from './Sections/Infobox';
const Auction = () => {
  return (
    <div className="auction-main">
      <div className="active-auction">
        Active Auction
      </div>
      <div className="Timer">
      <Countdown date={Date.now() + 1000*60} />
      </div>
      <div className="auction">
            
      <div className="image-container">
        <img className="car-image" src="https://i.imgur.com/oF2qZjD.jpeg"></img>
        <div className="screen-shot-2022-03-17-at-1052-2"></div>
      </div>
    
      <div className="auction-info-container">
        <Infobox/>
        <button className="view-appraisal-form">View Appraisal Form</button>
      </div>
        
    </div>      
    </div>
  );
}

export default Auction;