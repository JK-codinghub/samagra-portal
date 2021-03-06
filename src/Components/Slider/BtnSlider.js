import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left.png";
import rightArrow from "./icons/right-chevron.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <>
    <div className="container" style={{marginTop:"0"}}>
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow: leftArrow} alt=""/>
      
    </button>
    </div>
    </>
  );
}
