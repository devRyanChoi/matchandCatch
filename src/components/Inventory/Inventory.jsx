import React, {useState} from 'react';
//import './Inventory.css';


const Inventory =(props) =>{
  
  const imageSrc = props.source.map((imgur) =>{
    console.log(imgur.Milage);
    return(
      <img src={imgur.Milage}/>
    );
  }
  );
  return(
    <div>
      <section></section>
      <div>{imageSrc}</div>
    </div>
    
  );
};

export default Inventory;