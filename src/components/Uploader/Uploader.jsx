import React, {useState} from 'react';
import {Progress} from 'reactstrap';


export default function Uploader(props) {
  const {id, label} = props;
  
  const [progress, setProgress] = useState(0);
  const [isUploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState('');


  
  
  return (
    <div>
      
    </div>
  );
}

