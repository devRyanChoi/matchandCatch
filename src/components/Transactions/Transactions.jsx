import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Transactions.css';
import JSConfetti from "js-confetti";
import Confetti from 'react-confetti'
export default function Transactions (props) {
const navigate = useNavigate();
const {id} = useParams();
const handleClick = () => navigate('/');


const auction = props.state.auctions.filter((auc) => auc.id == id);
  
const vehicle = props.state.vehicles.filter((veh) => auction[0].vehicle_id == veh.id)
const dealers = props.state.dealers.filter((deal) => deal.id == auction[0].dealer_id)
const dealer = dealers[0];
if(!dealer) {
  return(<></>);
}
  
  if(props.admin) {
    return(
      <></>)
  } else {
    return(
    <div>
      <div className="confetti"><Confetti/></div>
      <div className="transactions">
      <div className="transaction-header">
        Auction Complete
      </div>
      <div className="transaction-container">
        <div className="transaction-top">
          <div className="dealer-avatar"></div>
          <div className="dealer-name">{dealer.name}</div>
          <div className="price-tag">$ {auction[0].price.toLocaleString()}</div>
        </div>
        <div className="transaction-detail">
         Transaction Details: 
        </div>
        <div className="transaction-detail-container">
          <div>Some Information</div>
          <div>Some Information</div>
          <div>Some Information</div>
        </div>
        <div className="home-button-container">
        <button className="home-button" onClick={() => {handleClick()}}>
          Home
        </button>
        </div>
      </div>
      </div>
    </div>
      )
  }
  
}