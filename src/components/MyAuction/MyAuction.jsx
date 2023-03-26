import React from 'react';

import './MyAuction.css';
import DealerAuction from './DealerAuction';
export default function MyAuction(props) {
  const currentUser = props.state.users;
  const isAdmin = props.state.admin;
  console.log(currentUser);
  if(isAdmin){
    return(
    <DealerAuction dealer={props.state.dealers[currentUser - 1]} auction={props.state.auctions} vehicle={props.state.vehicles}/>
    )
  }

  else {
    
    const ownedVehicles = props.state.vehicles.map((vehicle) =>{ 
      
      if (vehicle.seller_id === currentUser) {
        console.log("I have this car")
        const auctions = props.state.auctions.filter((auc) => auc.vehicle_id == vehicle.id)
        var maxBid = 0;

        if(auctions.length === 1) {
          maxBid = auctions.price;
        } else if (auctions.length > 1) {
          maxBid = Math.max(...auctions.map(x => x.price))
        }

        return (
          <a href={'/inventory/' + vehicle.id} className='myAuctionList'>
          
          <div className='myAuctionItem'>
        <div className='myAuctionItemName'>
          <h4>Waiting for approval</h4>
        </div>
        <div className='myAuctionItemPrice'>
          <div>Best price:</div>
          <div className='myAuctionItemPriceNumber'>${maxBid.toLocaleString()}</div>
        </div>
        <div className='myAuctionItemSteps'>
          <div className='myAuctionItemStep'>
            <div className='myAuctionItemLine'>
              <div className='point-ready'></div>
              <div className='line'></div>
            </div>
            <div className="status-note">Approved</div>
          </div>
          <div className='myAuctionItemStep'>
            <div className='myAuctionItemLine'>
              <div className='point-not'></div>
              <div className='line'></div>
            </div>
            <div>Active auction</div>
            <div className='myAuctionItemStepTime'>12:32:00</div>
          </div>
          <div className='myAuctionItemStep'>
          <div className='myAuctionItemLine'>
              <div className='point-not'></div>
              <div className='line'></div>
            </div>
            <div>Auction result</div>
            <div className='myAuctionItemStepTime'>12:32:00</div>
          </div>
          <div className='myAuctionItemStep'>
            <div className='myAuctionItemLine'>
              <div className='point-not'></div>
              <div className='line'></div>
            </div>
            <div>Dealer mached & Finalizing incoming transaction</div>
          </div>
          <div className='myAuctionItemStep'>
            <div className='myAuctionItemLine'>
              <div className='point-not'></div>
              <div className='line'></div>
            </div>
            <div>Auction complete</div>
          </div>
          </div>
      </div>
    </a>
        )
      }
    });
  return(
  <div className='myAuctionTotal'>
    <div className='myAuctionHeader'>
      <h2>My Auction</h2>
    </div>
    <div>
    {ownedVehicles}
    </div>
  </div>
  );
  }
};