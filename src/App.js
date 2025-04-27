import React, { useState } from "react";
import './App.css';

function App() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="App">
      <h1>Image Slideshow</h1>
      <div className="slideshow">
        <button onClick={prevImage}>Previous</button>
        <img src={images[currentImage]} alt="Slideshow" />
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default App;
