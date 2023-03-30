import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './InformationForm.css'
import images from '../../../constants/images'
export default function Register (props){
  const currentuser = props.currentuser;
  const [maker, setMaker] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [milage, setMilage] = useState('');
  const navigate = useNavigate();
  const handleClick = () => navigate('/register/image');
  console.log(currentuser);
  function sendInfo() {

    const car = {id:(props.length + 1), seller_id:currentuser[0].id,maker:maker,model:model,year:year,milage:milage}

    props.registerCar(1, car);
    handleClick();
  }
  return(
  <div>
    <div className="image-container">
      <img src={images.step1} className="step1-image"></img>
    </div>
    <div className='fform'>
      <div className='if-form'>
        <label htmlFor="make">Make
        </label>
        <input className="if-form-input" type="text" placeholder='Enter your car make' value={maker} onChange={(e) => setMaker(e.target.value)}/>
      </div>
      <div className='if-form'>
        <label htmlFor="make">Model</label>
        <input className="if-form-input" type="text" placeholder='Enter your car model' value={model} onChange={(e) => setModel(e.target.value)}/>
      </div>
      <div className='if-form'>
        <label htmlFor="make">Year</label>
        <input className="if-form-input" type="text" placeholder='Enter your car year' value={year} onChange={(e) => setYear(e.target.value)}/>
      </div>
      <div className='if-form'>
        <label htmlFor="make">Mileage</label>
        <input className="if-form-input" type="text" placeholder='Enter your car mileage' value={milage} onChange={(e) => setMilage(e.target.value)}/>
      </div>
      <div className="button-box">
        <button className="back-botton">Cancel</button>
        <button onClick={() => {sendInfo()}} className="next-botton">Next</button>
      </div>
    </div>
  </div>
  )}