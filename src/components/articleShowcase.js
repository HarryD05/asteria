import React, { useRef } from "react";
import SliderComponent from "./slider";
import _ from "./../constants/constants";

const ArticleShowcase = () => {
  const articles = _.SliderArticles.Articles;
  const sliderRef = useRef();

  const SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoScroll: true
  };

  return (
    <div className="articleShowcase">
      <SliderComponent {...SliderSettings} className="slider" ref={sliderRef} slides={articles} />
    </div>
  );
};

export default ArticleShowcase;