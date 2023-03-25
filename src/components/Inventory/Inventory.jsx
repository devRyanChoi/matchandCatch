import React, {useState} from 'react';
import StatusTag from './Help/StatusTag';
import './Inventory.css';

const Inventory =(props) =>{
  if(!props.state.vehicles) {
    return(<></>);
  }
  const imageSrc = props.state.vehicles.map((imgur) =>{
    const imageSrcs = props.state.images.filter((img) => img.vehicle_id == imgur.id)
    const image = imageSrcs[0];
    console.log(image);
    if(!image){
      return(<></>);
    }
    
    return(
      <a href={'/inventory/' + imgur.id} className="inventory-item-container">
          <img className="inventory-item-image" src={image.source}/>
          <StatusTag/>
          <div className="inventory-item-info">
            <div className="info-content">{imgur.year}</div>
            <div className="info-content">{imgur.maker}</div>
            <div className="info-content">{imgur.model}</div>
            <div className="info-milage">{imgur.milage} Km</div>
          </div>
      </a>
    );
  });

  return(
    <div className="inventory">
      <div className="inventory-sidebar">We Will Place Filters</div>
      <div className="inventory-item">{imageSrc}</div>
    </div>
    
  );
};

export default Inventory;