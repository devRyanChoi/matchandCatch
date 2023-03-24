import { useState } from "react";
import ReactDOM from 'react-dom/client';

export default function MyForm(props) {
  const [price, setPrice] = useState(0);
  
  const number = props.state.auctions.length + 1;
  return (
    <form className="bidding-container">
      <label>Bid:
        <input 
          type="text" 
          value={price}
          onChange={(e) => {
            setPrice(e.target.value)}}
        />
      </label>
      <input type="submit" onClick={()=>{props.onBid(number, props.vehicle_id,props.state.dealers[0].id, price)}} />
    </form>
  )
}

//