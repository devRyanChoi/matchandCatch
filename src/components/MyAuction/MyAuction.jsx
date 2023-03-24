import React from 'react';

import './MyAuction.css';
import DealerAuction from './DealerAuction';
export default function MyAuction(props) {
  
  if(props.state.admin){
    return(
    <DealerAuction dealer={props.state.dealers} transaction={props.state.transactions} vehicle={props.state.vehicles}/>
    )
  }

  else {
  return(
  <div className='myAuctionTotal'>
    <div className='myAuctionHeader'>
      <h2>My Auction</h2>
    </div>
    <div className='myAuctionList'>
      <div className='myAuctionItem'>
        <div className='myAuctionItemName'>
          <h4>Waiting for approval</h4>
        </div>
        <div className='myAuctionItemPrice'>
          <div>Best price:</div>
          <div className='myAuctionItemPriceNumber'>$30,000</div>
        </div>
        <div className='myAuctionItemSteps'>
          <div className='myAuctionItemStep'>
            <div className='myAuctionItemLine'>
              <div className='point'></div>
              <div className='line'></div>
            </div>
            <div>Waiting for approval</div>
          </div>
          <div className='myAuctionItemStep'>
            <div className='myAuctionItemLine'>
              <div className='point'></div>
              <div className='line'></div>
            </div>
            <div>Active auction</div>
            <div className='myAuctionItemStepTime'>12:32:00</div>
          </div>
          <div className='myAuctionItemStep'>
          <div className='myAuctionItemLine'>
              <div className='point'></div>
              <div className='line'></div>
            </div>
            <div>Auction result</div>
            <div className='myAuctionItemStepTime'>12:32:00</div>
          </div>
          <div className='myAuctionItemStep'>
            <div className='myAuctionItemLine'>
              <div className='point'></div>
              <div className='line'></div>
            </div>
            <div>Dealer mached & Finalizing incoming transaction</div>
          </div>
          <div className='myAuctionItemStep'>
            <div className='myAuctionItemLine'>
              <div className='point'></div>
              <div className='line'></div>
            </div>
            <div>Auction complete</div>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
  }
};