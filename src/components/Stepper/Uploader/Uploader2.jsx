import React, { useState } from 'react';
import {images} from '../../../constants';
import './Uploader.css';


export default function Uploader() {
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState('No selected file')
  const [rImage, setRimage] = useState(null)
  const [rFileName, setRfileName] = useState('No selected file')
  // const [image, setImage] = useState(null)
  // const [fileName, setFileName] = useState('No selected file')
  // const [image, setImage] = useState(null)
  // const [fileName, setFileName] = useState('No selected file')
  // const [image, setImage] = useState(null)
  // const [fileName, setFileName] = useState('No selected file')
  // const [image, setImage] = useState(null)
  // const [fileName, setFileName] = useState('No selected file')
  return (
    <main>
      {/* Front side*/}
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
      
      {/* Rear side */}
      <div className='stp-form '
      onClick={() => document.querySelector(".input-field").click()}
      >
      <input type="file" accept='image/*' className='input-field' hidden
         onChange={({target: {files}})=> {
          files[0] && setRfileName(files[0].name)
          if(files){
            setImage(URL.createObjectURL(files[0]))
          }
        }}   
        />
      {rImage ?
      <img src={rImage} width={540} height={285} alt={rFileName} />
      :
      <img src={images.srear} width="100%" height="70%"  /> 
      }
      </div>
      
      {/* Driver Side */}
      {/* <div className='stp-form '
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
      <img src={images.sdriverSide} width="100%" height="70%"  /> 
      }
      </div> */}

      
      {/* Passenger side */}
      {/* <div className='stp-form '
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
      <img src={images.spassengerSide} width="100%" height="70%"  /> 
      }
      </div> */}


      {/* Interior side */}
      {/* <div className='stp-form '
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
      <img src={images.sinterior} width="100%" height="70%"  /> 
      }
      </div> */}
      
    </main>
  );
}

