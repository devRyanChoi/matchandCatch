import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom'
import Countdown from 'react-countdown';
import './Auction.css';
import Infobox from './Sections/Infobox';
const Auction = (props) => {
  const {id} = useParams();
  console.log(props);
  const carz = props.source.filter((cars) => cars.id == id);
  const car = carz[0];
  console.log(car);
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
        <img className="car-image" src={car.image}></img>
        <div className="screen-shot-2022-03-17-at-1052-2"></div>
      </div>
    
      <div className="auction-info-container">
        <Infobox maker={car.Maker} year={car.Year} model={car.Model} milage={car.Milage}/>
        <button className="view-appraisal-form">View Appraisal Form</button>
      </div>
        
    </div>      
    </div>
  );
}

export default Auction;