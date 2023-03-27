import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SubHeading } from '..';
import { images } from '../../constants';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Main (props) {
  const navigate = useNavigate();
  const handleClick = () => navigate('/stepper');
  
return(
  <div>
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="We make selling your car easy, fast, and fair." />
        <h1 className='app__header-h1'>Are you looking to sell your car?</h1>
        <p className='p__opensans' styLe={{ margin: '2rem 0' }}></p>
        <button type="button" className='custom__button' onClick={()=>{handleClick()}}>Sell your car</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.car1} alt="header img" />
      </div>
    </div>

    <div className='leaderboardDiv'>
      <div className='leaderboardTitle'>Leaderboard</div>
      <div className='leaderboardIcons'>
        <div className='leaderboardIcon'>
          <FontAwesomeIcon icon={solid("medal")} size="2xl" style={{ color: "#fad900", }} />
        </div>
        <div className='leaderboardIcon'>
          <FontAwesomeIcon icon={solid("medal")} size="2xl" style={{ color: "#dbdbdb", }} />
        </div>
        <div className='leaderboardIcon'>
          <FontAwesomeIcon icon={solid("medal")} size="2xl" style={{ color: "#c57e1b", }} />
        </div>
        <div className='leaderboardIcon'>
          <div className='leaderboardIconOther'>4</div>
        </div>
        <div className='leaderboardIcon'>
          <div className='leaderboardIconOther'>5</div>
        </div>
      </div>

      <div className='mainPoints'>
        <div className='mainPoint'></div>
        <div className='mainPoint'></div>
        <div className='mainPoint'></div>
      </div>
      <div className='leaderboardButton'>
        <button type="button" className='custom__button'>View more</button>
      </div>
    </div>

    <div className='label1'>
      The Ideal way
      <br />of selling and buying a car.</div>

    <div className='descriptionDiv'>
      <div className='descriptionDiv1'>
        <div className='descriptionNumber'>01</div>
        <div className='descriptionDetail'>Car dealing, which has been providing an unsatisfying experience and difficulties in selling at a reasonable price.</div>
        <div className='descriptionMore'>Match & Catch is here to change.</div>
      </div>
      <div className='descriptionDiv2'>
        <div className='descriptionNumber'>02</div>
        <div className='descriptionDetail'>Forget the traditional way of selling your vehicle, which is difficult and anxious.
          <br />Selling your car should be profitable, safe, quick and effortless.
          <br />Sell your car to someone who fairly prices your vehicle.</div>
        <div className='descriptionMore'>Start with Match & Catch.</div>
      </div>
    </div>

    <div className='label2'>
      <div>
        <FontAwesomeIcon icon={solid("angles-right")} size="2xl" style={{ color: "#ff0000", }} />
      </div>
      <div className='label2Sentence'>Match the offers, Catch the best offer.</div>
    </div>

    <div className='otherInfoDiv'>
      <div className='otherInfoList'>
        <div className='otherInfoNumber'>1</div>
        <div className='otherInfoDetail'>
          <div className='otherInfoTitle'>Quote Requesting</div>
          <div>Share your car information and you will receive multiple offers within 48 hours.</div>
          <div className='mainLine'></div>
        </div>
      </div>
      <div className='otherInfoList'>
        <div className='otherInfoNumber'>2</div>
        <div className='otherInfoDetail'>
          <div className='otherInfoTitle'>Match and catch the best offer.</div>
          <div>Our dealers will compete for your car.</div>
          <div className='mainLine'></div>
        </div>
      </div>
      <div className='otherInfoList'>
        <div className='otherInfoNumber'>3</div>
        <div className='otherInfoDetail'>
          <div className='otherInfoTitle'>Set the appointment with the dealer you choose.</div>
          <div>Once you have matched, our dealer will give you a call within 24 hours.
            <br />Set the appointment with the dealer.
            <br />The dealer will be visiting your place and promptly inspecting your car.</div>
          <div className='mainLine'></div>
        </div>
      </div>
      <div className='otherInfoList'>
        <div className='otherInfoNumber'>4</div>
        <div className='otherInfoDetail'>
          <div className='otherInfoTitle'>Transaction will be made if there is no problem with the vehicle.</div>
          <div>Our dealer will make a transaction with you after a thorough inspection of your car.</div>
        </div>
      </div>
    </div>
  </div>
)
}