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
  const carz = props.state.vehicles.filter((cars) => cars.id == id);
  const auctions = props.state.auctions.filter((auc) => auc.vehicle_id == id)
  const car = carz[0];
  const currentuser = props.state.currentuser[0];
  let owner = false;
  if(!car)
  {
    return(<></>);
  }
  
  if(car.seller_id === currentuser.id) {
    owner = true;
  }
  var maxBid = 0;

  if(auctions.length === 1) {
    maxBid = auctions[0].price;
  } else if (auctions.length > 1) {
    maxBid = Math.max(...auctions.map(x => x.price))
  }
  const admin = currentuser.admin;
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
        </div>
    
        <div className="auction-info-container">
          <Infobox maker={car.maker} year={car.year} model={car.model} milage={car.milage} maxBid={maxBid}/>
          <button className="view-appraisal-form">View Appraisal Form</button>
        </div>
      </div>
      {admin ? (<AuctionInput length={props.state.auctions.length} vehicle_id={car.id} onBid={onBid} auctions={auctions} currentuser={currentuser}/>) : (<Result {...props} vehicleId={car.id} selectBid={onSelectBid} owner={owner}/>)}
    </div>
  );
}

export default Auction;