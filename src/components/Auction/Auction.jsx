import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom'
import Countdown from 'react-countdown';
import './Auction.css';
import Infobox from './Sections/Infobox';

const Auction = (props) => {
  const {id} = useParams();
  const carz = props.vehicle.filter((cars) => cars.id == id);
  const auction = props.auction.filter((auc) => auc.vehicle_id == id)
  const car = carz[0];
  
  const imageSrcs = props.image.filter((img) => img.vehicle_id == id)
  const image = imageSrcs[0];
  
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
    return(<>LOADING</>);
  }
  console.log(car.create_at);
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
      {/* <div className="auction-biddings">
        {auctions}
      </div>       */}
    </div>
  );
}

export default Auction;