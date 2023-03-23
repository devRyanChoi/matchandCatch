// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './PastAuction.css';
import PastAuctionInfo from './PastAuctionInfo/PastAuctionInfo'
export default function PastAuction (props) {
  if(!props.dealer){
    return(<></>);
  }
  const dealer = props.dealer[0];
  const completed = dealer.transactions.length;
  return(
  <div className='pastAuctionTotal'>
    <div className='pastAuctionHeader'>
    <h2>Past Auction</h2>
    <p>Completed {completed} auctions</p>
  </div>
  <PastAuctionInfo dealer = {dealer} vehicle={props.vehicle} transaction={props.transaction}/>
</div>);
}
  