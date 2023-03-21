import React, {useState} from 'react';
import './Inventory.css';


const Inventory =(props) =>{
  
  const imageSrc = props.source.map((imgur) =>{
    return(
      <a href={'/inventory/' + imgur.id} className="inventory-item-container">
        <img className="inventory-item-image" src={imgur.image}/>
        <div className="inventory-item-info">
          <div className="info-content">{imgur.Year}</div>
          <div className="info-content">{imgur.Maker}</div>
          <div className="info-content">{imgur.Model}</div>
        </div>
    </a>
      
    );
  }
  );
  return(
    <div className="inventory">
      <div className="inventory-sidebar">We Will Place Filters</div>
      <div className="inventory-item">{imageSrc}</div>
    </div>
    
  );
};

export default Inventory;