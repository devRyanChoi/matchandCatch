import React, { useState } from 'react';
import {images} from '../../../constants';
import './Uploader.css';


export default function Uploader() {
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState('No selected file')


  return(
    <main>
      <div className='stp-form '
        onClick={() => document.querySelector(".input-field").click()}
        >
        <input type="file" accept='image/*' className='input-field' hidden
          onChange={({target: {files}})=> {
            files[0] && setFileName(files[0].name)
            if(files){
              setImage(URL.createObjectURL(files[0]))
            }
          }}  
          />
        {image ?
        <img src={image} width={540} height={285} alt={fileName} />
        :
        <img src={images.sfront} width="100%" height="70%"  /> 
        }
      </div> 
    </main>
  );
}

