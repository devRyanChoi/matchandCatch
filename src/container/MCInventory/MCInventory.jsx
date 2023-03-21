import React from "react";
import "./MCInventory.css"; 

function App() {
  return (
    <MCInventory
      onTime="16:45:23"
      myAuctiontion="My Auctiontion"
      myListing="My Listing"
      blr="My Auction"
      rectangle618="rectangle-618.png"
      lightLogoLeft5LinksCenterAvatar2Ico={mCInventoryData.lightLogoLeft5LinksCenterAvatar2Ico}
    />
  );
}

export default App;

function MCInventory(props) {
  return (
    <div className="container-center-horizontal">
      <div className="m-c-inventory-2screen">
        <div className="overlap-group6">
        
          <div className="on-timevalign-text-middlerobotocondensed-bold-white-18px">
            onTime
          </div>
          <div className="my-auctiontionvalign-text-middlemulish-normal-fuscous-gray-16px">
            myAuctiontion
          </div>
          <div className="my-listingvalign-text-middlemulish-normal-fuscous-gray-16px">
            myListing
          </div>
          <img className="vector-14" src="vector-14-1.svg" alt="Vector 14" />
        </div>
        <h1 className="blrvalign-text-middlemulish-bold-mine-shaft-24px">
          blr
        </h1>
        <div className="item-container">
          <Item3 />
          <Item3 />
        </div>
        <div className="item-container-1">
          <Item3 />
          <Item3 />
        </div>
        <Footer />
        <img className="rectangle-618" alt="Rectangle 618" />
      </div>
    </div>
  );
}

function LightLogoLeft5LinksCenterAvatar2Ico(props) {
  const { group824 } = props;

  return (
    <div className="light-logo-left-5-li">
      <img className="frame" src="frame-1.svg" alt="Frame" />
      <Links />
      <img className="group-824" src={group824} alt="Group 824" />
      <div className="avatar">
        <div className="overlap-group">
          <img className="ellipse-13" src="rectangle-618.png" alt="Ellipse 13" />
          <img className="ngoctuvuongphi0" src="rectangle-618.png" alt="ngoctuvuongphi0" />
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="links">
      <div className="past-auctionvalign-text-middlemulish-normal-fuscous-gray-16px"></div>
    </div>
  );
}

function Item3() {
  return (
    <div className="item">
      <div className="overlap-group-1">
        <div className="group-1149mulish-normal-fuscous-gray-16px">
          <div className="flex-col">
            <div className="bid-pricevalign-text-middle">
              Bid Price:
            </div>
            <div className="year-brand-modelvalign-text-middle">
              Year/ Brand/ Model:
            </div>
            <div className="participating-dealersvalign-text-middle">
              Participating Dealers
            </div>
          </div>
          <div className="flex-col-1">
            <div className="pricevalign-text-middle">
              $30,000
            </div>
            <div className="addressvalign-text-middle">
              2020 Hyundai Elantra
            </div>
            <div className="numbervalign-text-middle">
              2
            </div>
          </div>
        </div>
        <div className="rectangle">time</div>
        <div className="on-time-1valign-text-middlerobotocondensed-bold-white-18px">
          16:45:23
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="overlap-group1">
        <div className="overlap-group-2">
          <p className="match-catch-inc-privacy-terms-helpvalign-text-middlemulish-normal-fuscous-gray-14px">
            © Match&amp;Catch Inc.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Terms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Help
          </p>
          <div className="ellipse-7"></div>
          <div className="ellipse-8"></div>
          <div className="ellipse-9"></div>
        </div>
        <div className="group-826">
          <img className="group-824-1" src="group-824.png" alt="Group 824" />
          <div className="languagevalign-text-middlemulish-normal-fuscous-gray-14px">
            English
          </div>
        </div>
        <div className="social">
          <img className="icon-instagram" src="union.svg" alt="icon-instagram" />
          <img className="facebook" src="facebook.svg" alt="Facebook" />
          <img className="icon-twitter" src="linkedin.png" alt="icon-twitter" />
        </div>
      </div>
    </footer>
  );
}

const lightLogoLeft5LinksCenterAvatar2IcoData = {
  group824: "group-824.png",
};

const mCInventoryData = {
  lightLogoLeft5LinksCenterAvatar2Ico: lightLogoLeft5LinksCenterAvatar2IcoData,
};