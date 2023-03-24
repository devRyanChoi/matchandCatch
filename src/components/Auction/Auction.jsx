import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom'
import Countdown from 'react-countdown';
import './Auction.css';
import Infobox from './Sections/Infobox';
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
  console.log(props.state.auctions);
  console.log("HELLO");
  const auction = props.state.auctions.filter((auc) => auc.vehicle_id == id)
  const car = carz[0];
  
  const imageSrcs = props.state.images.filter((img) => img.vehicle_id == id)
  const image = imageSrcs[0];

  function onBid (number, vehicleId, dealerId, price) {
    
    const auctions = {
      id: number,
      vehicle_id: vehicleId, 
      dealer_id: dealerId, 
      bid: Number(price), 
      selected: false
    };
    const auction = [...props.state.auctions,auctions]
    props.setAuction(auction);
  };

  // const auctions = auction.map((auc) =>{
  //   const findDealer = props.dealer.filter((deal) => deal.id == auc.dealer_id);
  //   const dealerName = findDealer[0].name;
  //     return(
  //       <div className="bid-container">
  //         <div>{dealerName}</div>
  //         <div>${auc.bid}</div>
  //         <div>BUTTON</div> 
  //       </div>
  //     )
  // })
  if(!car)
  {
    return(<></>);
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

      {mode === EMPTY &&<AuctionInput {...props} vehicle_id={car.id} onBid={onBid}/>}
      {/* <div className="auction-biddings">
        {auctions}
      </div>       */}
    </div>
  );
}

export default Auction;