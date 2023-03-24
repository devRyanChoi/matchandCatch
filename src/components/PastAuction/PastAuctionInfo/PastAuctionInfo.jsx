import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function PastAuctionInfo(props) {
  if(!props.dealer)
  {
    return(<></>);
  }
  const dealers = props.dealer;
  const transaction = props.transaction.map((trans) => {
    const dealers = props.dealer.filter((dealerId) => dealerId.id == trans.dealer_id);
    const dealer = dealers[0];
    if (dealer.id === trans.dealer_id){
      return(
      
        <div className='pastAuctionItem'>
          <div className='pastAuctionCarImage'>
            <img />
          </div>
          <div className='pastAuctionTag'>
            <div className='userAvatar'></div>
            <div className='userInfo'>
              <div className='userName'>{dealer.name}</div>
              <div>Ranking 5</div>
            </div>
            <div className='userPaied'>$30,000</div>
            <div className='userCheckIcon'>
              <FontAwesomeIcon icon={solid("circle-check")} style={{ color: "#198a3b", }} />
            </div>
          </div>
          <div className='pastAuctionDetail'>
          <div className='pastAuctionDetailLine'>
            <div>Selected price</div>
            <div className='pastAuctionDetailLineResult'>$30,000</div>
          </div>
          <div className='pastAuctionDetailLine'>
            <div>Average price</div>
            <div className='pastAuctionDetailLineResult'>$27,000</div>
          </div>
          <div className='pastAuctionDetailLine'>
            <div>Date of transaction</div>
            <div className='pastAuctionDetailLineResult'>Jan 4, 2022</div>
          </div>
          <div className='pastAuctionDetailLine'>
            <div>Year/ Brand/ Model</div>
            <div className='pastAuctionDetailLineResult'>2020 Hyundai Elantra</div>
          </div>
          <div className='pastAuctionDetailLine'>
            <div>Participated dealers</div>
            <div className='pastAuctionDetailLineResult'>2</div>
          </div>
        </div>
      </div>
      );
    }
  });
  
  
  
  return(
    <div className='pastAuctionList'>
      {transaction}
    </div>
  )
  
  
  
  
}