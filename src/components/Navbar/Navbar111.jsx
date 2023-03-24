import React, {useState} from 'react';
import { GiMailShirt } from 'react-icons/gi';

import './Navbar111.css';

export default function Navbar111() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const currentUser= {
    id:1,
    email: "mingun@matchncatch.net",
    isSeller: true
  }

  return (
    <div className="navbar">
      <div className="container">
          <div className="logo">
            
              <span className="text">Match&</span>            
              <span className="dot">Catch</span>            
            
          </div>
          <div className="links">
            <span>Past Auction</span>
            <span>Dealer's Offers</span>
            <span>Leaderboard</span>
            {!currentUser?.isSeller && <span>My Auction</span>}            
            {!currentUser && <button>Sign In</button>}
            {!currentUser && <button>Sign Up</button>}
            {currentUser && (
              <div className='user' onClick={() => setOpen(!open) }>
                <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRUD0gariUdaGP-GKSQLJJeOgPqHxMEJ5o0BUv9HMSAJh0zJvwmkY7dehcE8DEYukpirpQ1ov7LvFixke0
                " alt="" />
                <span>{currentUser?.email}</span>  
                {open && <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Sign Out</span>
                      <span>Help</span>
                    </>
                    )
                  }
                </div>}
              </div>
            )}
          </div>
      </div>
    </div>
  );
}

