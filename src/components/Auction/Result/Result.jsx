import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css';

export default function Result (props) {
  const navigate = useNavigate();
  console.log(props.owner);
    const auction = props.state.auctions.map((auc) => {
      if (auc.vehicle_id === props.vehicleId) {
        const dealerNames = props.state.dealers.filter((dealer) => dealer.id == auc.dealer_id);
        const dealerName = dealerNames[0];
        const handleClick = (a) => navigate(`/transactions/${a}`);
        return(
            <div className='resultLine'>
              <div className='resultNames'>
                <div className='resultName'>{dealerName.name}</div>
                <div>Ranking: <div className='rankingNumber'>5</div></div>
              </div>
              <div className='resultPrice'>${auc.price.toLocaleString()}</div>
              <div className='resultButtonDiv'>
              {props.owner ? (<button className='resultButton' onClick={()=>{
        props.selectBid(auc); handleClick(auc.id)}}>SELL MY CAR</button>) :(<></>)}
              </div>
            </div>
        );
      }
    })

    return(
      <div className='resuleList'>
        {auction}
      </div>
    )

}
 
