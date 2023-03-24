import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";

import './Footer.css';

const Footer = () => (
  <div className='footerTotal'>
    <div className='footerLeft'>
      <div className='footerCopyright'>
        &copy; Match&Catch Inc.
      </div>
      <div className='footerLinks'>
        <div className='footerLink'>Privocy</div>
        <div className='points'></div>
        <div className='footerLink'>Terms</div>
        <div className='points'></div>
        <div className='footerLink'>Help</div>
      </div>
    </div>
    <div className='footerRight'>
      <div className='footerLanguages'>
        <div>
          <FontAwesomeIcon icon={solid("earth-americas")} size='2xl' style={{ color: "#828282", }} />
        </div>
        <div className='footerLanguage'>English</div>
      </div>
      <div className='footerIcons'>
        <div className='footerIcon'>
          {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
        </div>
        <div className='footerIcon'>
          {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
        </div>
        <div className='footerIcon'>
          {/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;