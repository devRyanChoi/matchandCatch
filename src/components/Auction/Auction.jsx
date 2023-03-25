import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom'
import Countdown from 'react-countdown';
import './Auction.css';
import Infobox from './Sections/Infobox';
import Result from './Result/Result';
import useVisualMode from "../../hooks/useVisualMode";
import AuctionInput from './Sections/AuctionInput';

const Auction = (props) => {
  const EMPTY = "EMPTY";
  const SAVING ="SAVING";
  const {id} = useParams();
 
  const { mode, transition, back } = useVisualMode(
    EMPTY
  );
  const carz = props.state.vehicles.filter((cars) => cars.id == id);

  const auction = props.state.auctions.filter((auc) => auc.vehicle_id == id)
  const car = carz[0];
  if(!car)
  {
    return(<></>);
  }
  
  const imageSrcs = props.state.images.filter((img) => img.vehicle_id == id)
  const image = imageSrcs[0];
  function onBid (number, vehicleId, dealerId, price) {
    
    const auctions = {
      id: number,
      vehicle_id: vehicleId, 
      dealer_id: dealerId, 
      price: Number(price), 
      selected: false
    };
    props.makeBid(number, auctions);
  };

  function onSelectBid(bidInfo){

    const auction ={id:bidInfo.id, vehicle_id: bidInfo.vehicle_id , dealer_id: bidInfo.dealer_id, price: bidInfo.price, selected: true}
    props.selectBid(bidInfo.id, auction);
    props.selectVehicle(bidInfo.id, auction);
  }
  
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
          <img className="car-image" src={image.source}></img>
          <div className="screen-shot-2022-03-17-at-1052-2"></div>
        </div>
    
        <div className="auction-info-container">
          <Infobox maker={car.maker} year={car.year} model={car.model} milage={car.milage}/>
          <button className="view-appraisal-form">View Appraisal Form</button>
        </div>
      </div>
      {props.state.admin ? (<AuctionInput {...props} vehicle_id={car.id} onBid={onBid}/>) : (<Result {...props} vehicleId={car.id} selectBid={onSelectBid}/>)}
      

      
   
    </div>
  );
}

export default Auction;