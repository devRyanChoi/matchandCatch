import React from 'react';
import './CompleteForm.css'
import { images } from '../../../constants';

export default function CompleteFOrm() {
  return (
    <div className="container-main">
      <div className='car-info'>
        <div className='cf-img'>
          <img src={images.c4} alt="" />
        </div>      
        <div className='cf-desc'>
          <h2>Thank you</h2>
          <p>1. After you finished this form, your auction will start right away.           
          </p>
          <p>2. You can choose the dealer who you want to deal with within 48hours.</p>
        </div>
      </div>
            
  </div>
  );
}

