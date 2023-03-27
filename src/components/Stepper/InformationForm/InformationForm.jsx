import React from 'react';
import './InformationForm.css';

export default function informationForm() {
  return (
    <div className='fform'>
      <div className='if-form'>
        <label htmlFor="make">Make
        </label>
        <input className="if-form-input" type="text" placeholder='Enter your car make'/>
      </div>
      <div className='if-form'>
        <label htmlFor="make">Model</label>
        <input className="if-form-input" type="text" placeholder='Enter your car model'/>
      </div>
      <div className='if-form'>
        <label htmlFor="make">Year</label>
        <input className="if-form-input" type="text" placeholder='Enter your car year'/>
      </div>
      <div className='if-form'>
        <label htmlFor="make">Mileage</label>
        <input className="if-form-input" type="text" placeholder='Enter your car mileage'/>
      </div>
    </div>
  );
}

