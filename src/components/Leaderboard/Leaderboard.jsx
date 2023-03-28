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
          <div className='leaderboardName'>Michale</div>
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
          <div className='leaderboardName'>Michale</div>
          <div className='leaderboardCompleted'>
            <div className='leaderboardLabel'>Completed Auctions:</div>
            <div className='leaderboardNumber'>21</div>
          </div>
        </div>
      </div>
      <div className='leaderboardItem'>
        <div>
          <FontAwesomeIcon icon={solid("medal")} size="2xl" style={{ color: "#c57e1b", }} />
        </div>
        <div className='leaderboardDetaio'>
          <div className='leaderboardName'>Michale</div>
          <div className='leaderboardCompleted'>
            <div className='leaderboardLabel'>Completed Auctions:</div>
            <div className='leaderboardNumber'>21</div>
          </div>
        </div>
      </div>
      <div className='leaderboardItem'>
        <div className='leaderboardPoint'>
          4
        </div>
        <div className='leaderboardDetaio'>
          <div className='leaderboardName'>Michale</div>
          <div className='leaderboardCompleted'>
            <div className='leaderboardLabel'>Completed Auctions:</div>
            <div className='leaderboardNumber'>21</div>
          </div>
        </div>
      </div>
      <div className='leaderboardItem'>
        <div className='leaderboardPoint'>
          5
        </div>
        <div className='leaderboardDetaio'>
          <div className='leaderboardName'>Michale</div>
          <div className='leaderboardCompleted'>
            <div className='leaderboardLabel'>Completed Auctions:</div>
            <div className='leaderboardNumber'>21</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Leaderboard;