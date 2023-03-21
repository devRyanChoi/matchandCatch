import React from "react";

function App() {
  return <FinalizingTransaction {...finalizingTransactionData} />;
}

export default App;

function FinalizingTransaction(props) {
  return (
    <div className="container-center-horizontal">
      <div className="finalizing-transactionscreen">
        {/* <LightLogoLeft5LinksCenterAvatar2Ico */}
          {/* group824={lightLogoLeft5LinksCenterAvatar2Ico.group824}
          maskGroup={lightLogoLeft5LinksCenterAvatar2Ico.maskGroup}
          ngoctuvuongphi0={lightLogoLeft5LinksCenterAvatar2Ico.ngoctuvuongphi0}
        /> */}
        <h1 className="blrvalign-text-middlemulish-bold-mine-shaft-24px">
        blr1
        </h1>
        <div className="overlap-group2">
          <div className="sign-up-fullmulish-bold-eerie-black-16px">
            <div className="flex-row">
              <img className="path" src="path.svg" alt="Path" />
              <div className="flex-col">
                <p className="please-provide-the-rmulish-bold-eerie-black-18px">
                  pleaseProvideTheR
                </p>
                <div className="no-price-adjustmentmulish-bold-eerie-black-16px">
                  noPriceAdjustment
                </div>
              </div>
            </div>
            <div className="price-adjustment">
              priceAdjustment
            </div>
            <div className="overlap-group1">
              <img className="vector-19" src="vector-193-1.svg" alt="Vector 193" />
              <img className="path-1" src="path.svg" alt="Path" />
              <img className="vector-19" src="vector-194.svg" alt="Vector 194" />
            </div>
            <div className="flex-col-1">
              <div className="overlap-group">
                <div className="price">
                  price
                </div>
              </div>
              <div className="rectangle-87"></div>
            </div>
          </div>
          {/* <img className="group-2218" src={group2218} alt="Group 2218" /> */}
          <p className="please-clarify-the-rmulish-normal-fuscous-gray-16px">
            pleaseClarifyTheR
          </p>
          {/* <img className="group-404" src={group404} alt="Group 404" /> */}
        </div>
        <div className="blr-1valign-text-middlemulish-bold-eerie-black-16px">
          blr2
        </div>
        <div className="front">
          <div className="group-2211">
            {/* <img className="group-2191-1" src={group21911} alt="Group 2191" /> */}
            <div className="namemulish-bold-eerie-black-16px">
              name
            </div>
          </div>
        </div>
        <div className="finalizing-transaction-item">
          <div className="group-2211-1">
            {/* <img className="group-2191" src={group21912} alt="Group 2191" /> */}
            <div className="e-trnasfer-receiptmulish-bold-eerie-black-16px">
             eTrnasferReceipt
            </div>
          </div>
        </div>
        <div className="finalizing-transaction-item">
          <div className="group-2211-2">
            {/* <img className="group-2191" src={group21913} alt="Group 2191" /> */}
            <div className="transferred-vehicle-ownershipmulish-bold-eerie-black-16px">
             transferredVehicleOwnership
            </div>
          </div>
        </div>
        <div className="overlap-group3">
          <div className="submitvalign-text-middlemulish-bold-white-24px">
           submit
          </div>
        </div>
      </div>
    </div>
  );
}

function LightLogoLeft5LinksCenterAvatar2Ico(props) {
  const { group824, maskGroup, ngoctuvuongphi0 } = props;

  return (
    <div className="light-logo-left-5-li">
      <img className="frame" src="frame-10.svg" alt="Frame" />
      <Links />
      <img className="group-824" src={group824} alt="Group 824" />
      <div className="avatar">
        <div className="mask-group" style={{ backgroundImage: `url(${maskGroup})` }}>
          <img className="ngoctuvuongphi0" src={ngoctuvuongphi0} alt="ngoctuvuongphi0" />
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

const lightLogoLeft5LinksCenterAvatar2IcoData = {
  group824: "group-824-13.png",
  maskGroup: "rectangle-618.png",
  ngoctuvuongphi0: "rectangle-618.png",
};

const finalizingTransactionData = {
  blr1: "Finilizing Transaction",
  pleaseProvideTheR: "Please provide the result of the transaction",
  noPriceAdjustment: "No Price Adjustment",
  priceAdjustment: " Price Adjustment",
  price: "$",
  group2218: "group-2218.png",
  pleaseClarifyTheR: "Please clarify the reason and upload the picture of depreciated factor......",
  group404: "group-404-1.png",
  blr2: "Please uplodad following documents:",
  group21911: "group-2218.png",
  name: "Bill of Sales",
  group21912: "group-2218.png",
  eTrnasferReceipt: "E trnasfer receipt",
  group21913: "group-2218.png",
  transferredVehicleOwnership: "Transferred Vehicle Ownership",
  submit: "Submit",
  lightLogoLeft5LinksCenterAvatar2Ico: lightLogoLeft5LinksCenterAvatar2IcoData,
};