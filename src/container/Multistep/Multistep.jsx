import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import images from '../../constants/images';

import './Multistep.css';

const Multistep = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  <nav className="app_navbar">
    <div className='app_navbar-logo'>
      <img src={images.mc} alt="app logo" />
      </div>
      <ul className='app_navbar-links'>
        <li className="p__opensans"><a href="#home">Past auction</a></li>
        <li className="p__opensans"><a href="#home">Dealer offer</a></li>
        <li className="p__opensans"><a href="#home">Leaderboard</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="/" className="p__opensans">My Auction</a>
        <div/>
        <a href="#" className='p__opensans'>Sign In</a>
      </div>
      <div className="app__navbar-samllscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottm'>
            <AiFillCloseCircle fontsize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className="p__opensans"><a href="#home">Past auction</a></li>
              <li className="p__opensans"><a href="#home">Dealer offer</a></li>
              <li className="p__opensans"><a href="#home">Leaderboard</a></li>
            </ul>
          </div>
        )}
      </div>
  </nav>
  
}

export default Multistep;
