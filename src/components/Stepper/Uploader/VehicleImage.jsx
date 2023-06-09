import React,{useState, useEffect} from 'react';

import './Uploader1.css';
import images from '../../../constants/images'
import { useNavigate } from 'react-router-dom';

export default function Uploader1(props) {
    const [selectedImage, setSelectedImage] = useState();
    const navigate = useNavigate();
    const handleClick = () => navigate('/register/ApraisalForm');
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    };
 
    const onSubmit = (e) => {
        e.preventDefault() 
        
        alert(URL.createObjectURL(selectedImage))
        
    }

    function sendImage () {
      const tempImage = {
        id:(props.length +1),
        vehicle_id: props.length,
        source:"https://imgur.com/a/YZupMG9"
      }
      props.registerImage(props.length,tempImage);
    }
     
    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
      console.log(URL.createObjectURL(selectedImage));
        setSelectedImage();
    };

  return (
    <div>
    <div className="image-container">
      <img src={images.step2} className="step2-image"></img>
    </div>
      <div className="container" >
        <h1 className='ct-title'> ReactJS Show Image Preview before Uploading </h1>
        <div className="row">
            <form onSubmit={ onSubmit } className="form-inline">
                <div className="form-group">
                <label>Choose File to Upload: </label>
                <input type="file" className="form-control" onChange={imageChange} accept="image/*"/>
                </div> <br/>
            </form>
 
        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
        </div>
        
      </div>
      <div className="button-box">
          <button className="back-botton">Cancel</button>
          <button onClick={() => {handleClick()}} className="next-botton">Next</button>
        </div>
    </div>
  );
};

// Just some styles
const styles = {
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};