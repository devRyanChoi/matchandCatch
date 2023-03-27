import { images } from '../../../constants';
import React from 'react';


export default function Uploader1() {


  
  return (
    <div>
          <div class="form">
            {/* <h2>Preview Image Before Upload</h2> */}
          </div>
            <div class="grid">
            <div/>
          <div class="form-element">
          <input type="file" id="file-1" accept="image/*"/>
          <label for="file-1" id="file-1-preview"/>
                  <img src={images.sfront} alt=""/>
              <div>
                <span>+</span>
              </div>
          </div>

      <div class="form-element">
        <input type="file" id="file-2" accept="image/*"/>
        <label for="file-2" id="file-2-preview"/>
          <img src={images.srear} alt=""/>
          <div>
            <span>+</span>
          </div>
        
      </div>
      <div class="form-element">
        <input type="file" id="file-3" accept="image/*"/>
        <label for="file-3" id="file-3-preview"/>
          <img src={images.sdriverSide} alt=""/>
          <div>
            <span>+</span>
          </div>
        
      </div>
      <div class="form-element">
        <input type="file" id="file-4" accept="image/*"/>
        <label for="file-4" id="file-4-preview"/>
          <img src={images.spassengerSide} alt=""/>
          <div>
            <span>+</span>
          </div>
       
      </div>
      <div class="form-element">
        <input type="file" id="file-5" accept="image/*"/>
        <label for="file-5" id="file-5-preview"/>
          <img src={images.sinterior} alt=""/>
          <div>
            <span>+</span>
          </div>
        
      </div>
    </div>
  </div>
);


}

