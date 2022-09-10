import React, { useRef } from "react";
import SliderComponent from "./slider";
import _ from "./../constants/constants";

const ArticleShowcase = ({articles}) => {
  const sliderRef = useRef();

  return (
    <div className="articleShowcase">
      <SliderComponent className="slider" ref={sliderRef} slides={articles} />
    </div>
  );
};

export default ArticleShowcase;