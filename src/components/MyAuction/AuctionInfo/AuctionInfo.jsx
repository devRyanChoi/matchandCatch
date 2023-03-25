import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import CheckMark from './CheckMark';

export default function PastAuctionInfo(props) {
  if(!props.dealer)
  {
    return(<></>);
  }
  
  const dealer = props.dealer;
  const auction = props.auction.map((trans) => {
    
    if (dealer.id === trans.dealer_id){
      const vehicleId = trans.vehicle_id;
      console.log();
      return(
      
        <a href={'/inventory/'} className='pastAuctionItem'>
          <div className='pastAuctionCarImage'>
            <img />
          </div>
          <div className='pastAuctionTag'>
            <div className='userAvatar'></div>
            <div className='userInfo'>
              <div className='userName'>{dealer.name}</div>
              <div>Ranking 5</div>
            </div>
            <div className='userPaied'>${trans.price}</div>
            <div className='userCheckIcon'>
              <CheckMark done={trans.selected}/>
            </div>
          </div>
          <div className='pastAuctionDetail'>
          <div className='pastAuctionDetailLine'>
            <div>Selected price</div>
            <div className='pastAuctionDetailLineResult'>$30,000</div>
          </div>
          {trans.selected ? (<></>) : (<div className='pastAuctionDetailLine'>
            <div>Average price</div>
            <div className='pastAuctionDetailLineResult'>$27,000</div>
          </div>)
          }
          
          <div className='pastAuctionDetailLine'>
            <div>Date of transaction</div>
            <div className='pastAuctionDetailLineResult'>Jan 4, 2022</div>
          </div>
          <div className='pastAuctionDetailLine'>
            <div>Year/ Brand/ Model</div>
            <div className='pastAuctionDetailLineResult'>
              <p>{props.vehicle[vehicleId-1].year} {props.vehicle[vehicleId-1].maker} {props.vehicle[vehicleId-1].model}</p>
            </div>
          </div>
          <div className='pastAuctionDetailLine'>
            <div>Participated dealers</div>
            <div className='pastAuctionDetailLineResult'>2</div>
          </div>
        </div>
      </a>
      );
    }
  }); 
  return(
    <div className='pastAuctionList'>
      {auction}
    </div>
  )
  
  
  
  
}