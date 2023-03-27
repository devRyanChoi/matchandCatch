import { useState } from "react";
import ReactDOM from 'react-dom/client';
import './AuctionInput.css'
export default function MyForm(props) {
  const [price, setPrice] = useState(0);
  const number = props.length + 1;
  let exist = false;
  const invalid = props.auctions.filter((auc) => auc.vehicle_id == props.vehicle_id && auc.dealer_id == props.currentuser.id);
  if (invalid.length === 1) {
    exist = true;
  }
  return (
    <div className="auction-bottom-container">
      {exist ? (<div className="invalid-box">
        <div className="invalid-bix-item">Thank You for Bidding</div></div>) : (<div className="input-container">
    <label className="input-label">BID:
      <input 
        className="input-container-box"
        type="text" 
        placeholder="$"
        value={price}
        onChange={(e) => {
        setPrice(e.target.value)}}
      />
    </label>
    
    <button  onClick={()=>{
    props.onBid(number, props.vehicle_id, props.currentuser.id, price)}}>Submit </button>
  </div>)}
      
    </div>
  );
}

//