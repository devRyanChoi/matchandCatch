import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import './Leaderboard.css';

const Leaderboard = () => (
  <div className='leaderboardTotal'>
    <div className='leaderboardTitle'>Leaderboard</div>
    <div className='leaderboardList'>
      <div className='leaderboardItem leaderboardItem1'>
        <div>
          <FontAwesomeIcon icon={solid("medal")} size="2xl" style={{ color: "#fad900", }} />
        </div>
        <div className='leaderboardDetaio'>
          <div className='leaderboardName'>Lord V</div>
          <div className='leaderboardCompleted'>
            <div className='leaderboardLabel'>Completed Auctions:</div>
            <div className='leaderboardNumber'>21</div>
          </div>
        </div>
      </div>
      <div className='leaderboardItem'>
        <div>
          <FontAwesomeIcon icon={solid("medal")} size="2xl" style={{ color: "#dbdbdb", }} />
        </div>
        <div className='leaderboardDetaio'>
          <div className='leaderboardName'>Ron</div>
          <div className='leaderboardCompleted'>
            <div className='leaderboardLabel'>Completed Auctions:</div>
            <div className='leaderboardNumber'>19</div>
          </div>
        </div>
      </div>
      <div className='leaderboardItem'>
        <div>
          <FontAwesomeIcon icon={solid("medal")} size="2xl" style={{ color: "#c57e1b", }} />
        </div>
        <div className='leaderboardDetaio'>
          <div className='leaderboardName'>Dumbledore</div>
          <div className='leaderboardCompleted'>
            <div className='leaderboardLabel'>Completed Auctions:</div>
            <div className='leaderboardNumber'>18</div>
          </div>
        </div>
      </div>
      <div className='leaderboardItem'>
        <div className='leaderboardPoint'>
          4
        </div>
        <div className='leaderboardDetaio'>
          <div className='leaderboardName'>Hermione</div>
          <div className='leaderboardCompleted'>
            <div className='leaderboardLabel'>Completed Auctions:</div>
            <div className='leaderboardNumber'>10</div>
          </div>
        </div>
      </div>
      <div className='leaderboardItem'>
        <div className='leaderboardPoint'>
          5
        </div>
        <div className='leaderboardDetaio'>
          <div className='leaderboardName'>Snape</div>
          <div className='leaderboardCompleted'>
            <div className='leaderboardLabel'>Completed Auctions:</div>
            <div className='leaderboardNumber'>5</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Leaderboard;