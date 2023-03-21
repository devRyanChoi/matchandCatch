import React from "react";

export default function Infobox(props) {
  

  return (
    <div className="infobox">
        <div className="auction-carname">
          <p className="auction-spacing">{props.maker}</p>
      
          <p>{props.model}</p>
        </div>
        <div className="auction-info">
          <p className="auction-tag">Year</p>
          <p className="auction-tag-value">{props.year}</p>
        </div>
        <div className="auction-info">
          <p className="auction-tag">Milage</p>
          <p className="auction-tag-value">{props.milage}</p>
        </div>
        <div className="auction-info">
          <p className="auction-tag">Buy Option</p>
          <p className="auction-tag-value">120000</p>
        </div>
        <div className="auction-info">
          <p className="auction-tag">Trim</p>
          <p className="auction-tag-value">120000</p>
        </div>
        <div className="auction-price-box">
          <p className="auction-price">$30000</p>
          <p className="auction-best-price">Best Price</p>
        </div>
        
        <div className="line"></div>
    </div>
  );
}