import { useState } from "react";
import "../css/Slideshow.css";

import bohemian from "../images/bohemian.jpg";
import zeppelin from "../images/zeppelin.jpg";
import five from "../images/five.jpg";

const images = [bohemian, zeppelin, five];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="slideshow">
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <img className="slide-image" src={images[current]} alt="slide" />

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}