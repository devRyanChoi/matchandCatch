import React from 'react';

import './Result.css';

export default function Result (props) {
    const auction = props.state.auctions.map((auc) => {
      if (auc.vehicle_id === props.vehicleId) {
        const dealerNames = props.state.dealers.filter((dealer) => dealer.id == auc.dealer_id);
        const dealerName = dealerNames[0];
        return(
            <div className='resultLine'>
              <div className='resultNames'>
                <div className='resultName'>{dealerName.name}</div>
                <div>Ranking: <div className='rankingNumber'>5</div></div>
              </div>
              <div className='resultPrice'>${auc.bid}</div>
              <div className='resultButtonDiv'>
                <button className='resultButton'>SELL MY CAR</button>
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
 
