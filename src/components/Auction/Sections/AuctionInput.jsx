import { useState } from "react";
import ReactDOM from 'react-dom/client';
import './AuctionInput.css'
export default function MyForm(props) {
  const [price, setPrice] = useState(0);
  const number = props.state.auctions.length + 1;
  
  return (
    <div className="input-container">
      <div>
        <label className="input-label">BID:
          <input 
            className="input-container-box"
            type="text" 
            value={price}
            onChange={(e) => {
            setPrice(e.target.value)}}
          />
        </label>
        <button  onClick={()=>{
        props.onBid(number, props.vehicle_id, props.state.users, price)}}>Submit </button>
      </div>
    </div>
  );
}

//