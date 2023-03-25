import React from 'react';

import './MyAuction.css';
import DealerAuction from './DealerAuction';
export default function MyAuction(props) {
  const currentUser = 2; //props.state.user;
  const isAdmin = true;//props.state.admin;
  if(isAdmin){
    return(
    <DealerAuction dealer={props.state.dealers[0]} transaction={props.state.transactions} vehicle={props.state.vehicles}/>
    )
  }

  else {
    
    const ownedVehicles = props.state.vehicles.map((vehicle) =>{ 
      if (vehicle.seller_id === currentUser) {
      
        const auctions = props.state.auctions.filter((auc) => auc.vehicle_id == vehicle.id)
        var maxBid = 0;
        console.log(auctions.length);
        if(auctions.length === 1) {
          maxBid = auctions.bid;
        } else if (auctions.length > 1) {
          maxBid = Math.max(...auctions.map(x => x.bid))
        }

  
        return (
          <a href={'/inventory/' + vehicle.id} className='myAuctionList'>
          
          <div className='myAuctionItem'>
        <div className='myAuctionItemName'>
          <h4>Waiting for approval</h4>
        </div>
        <div className='myAuctionItemPrice'>
          <div>Best price:</div>
          <div className='myAuctionItemPriceNumber'>${maxBid}</div>
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