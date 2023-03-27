import React,{useState, useEffect} from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import axios from '../../Signin/api/axios';
import './Uploader1.css';


export default function Uploader1() {
    const [selectedImage, setSelectedImage] = useState();
 
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
     
    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };

  return (
    <>
      <div className="container" >
        <h1 className='ct-title'> ReactJS Show Image Preview before Uploading </h1>
        <div className="row">
            <form onSubmit={ onSubmit } className="form-inline">
                <div className="form-group">
                <label>Choose File to Upload: </label>
                <input type="file" className="form-control" onChange={imageChange} accept="image/*"/>
                </div> <br/>
                <button type="submit" className="btn-success" >Upload File</button>
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
    </>
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