import React from 'react';

import './Result.css';

const Result = () => (
  <div className='resuleList'>
    <div className='resultLine'>
      <div className='resultNames'>
        <div className='resultName'>Lynt</div>
        <div>Ranking: <div className='rankingNumber'>5</div></div>
      </div>
      <div className='resultPrice'>$29,000</div>
      <div className='resultButtonDiv'>
        <button className='resultButton'>SELL MY CAR</button>
      </div>
    </div>
    <div className='resultLine'>
      <div className='resultNames'>
        <div className='resultName'>Lynt</div>
        <div>Ranking: <div className='rankingNumber'>5</div></div>
      </div>
      <div className='resultPrice'>$29,000</div>
      <div className='resultButtonDiv'>
        <button className='resultButton'>SELL MY CAR</button>
      </div>
    </div>
  </div>
);

export default Result;