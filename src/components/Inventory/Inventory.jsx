import React, {useState} from 'react';
import './Inventory.css';


const Inventory =(props) =>{


  const imageSrc = props.vehicle.map((imgur) =>{
    const imageSrcs = props.image.filter((img) => img.vehicle_id == imgur.id)
    const image = imageSrcs[0];
    console.log(image);
    return(
      <a href={'/inventory/' + imgur.id} className="inventory-item-container">
          <img className="inventory-item-image" src={image.source}/>
          <div className="inventory-status">SOLD</div>
          <div className="inventory-item-info">
            <div className="info-content">{imgur.year}</div>
            <div className="info-content">{imgur.maker}</div>
            <div className="info-content">{imgur.model}</div>
            
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