import React, { useState } from 'react'
import "./Objects.css"
import toast from 'react-hot-toast';

const Objects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [detection, setDetection] = useState("")

  const handleImageChange = async(event) => {
    const file = event.target.files[0];
    setSelectedImage(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setDisplayImage(reader.result);
  };

  const handleUpload = async() => {
    try {
      const formData = new FormData();
      formData.set("image", selectedImage);
      const response = await fetch("/api/v1/object", {
        method: "POST",
        body: formData
      });
      const data = await response.json()
      const obj = data?.[0]?.label;
      setDetection(obj)
    } catch (error) {
      console.log(error)
      toast.error(error?.message)
      }
    };

  return (
    <div className='objects__page'>
      <h1>Upload an Image and gets its <span color='pink'>Text📷</span></h1>
      <p>Have an image of something but cannot recall what it is called in English? Just upload the image and let our AI do the magic🪄</p>
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      {displayImage && <img src={displayImage} alt="Uploaded" />}
      {detection && <h2>You have uploaded an image of: {detection}</h2>}
     </div>
  )
}

export default Objects