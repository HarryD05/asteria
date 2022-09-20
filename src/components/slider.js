import React, { useRef, useImperativeHandle } from "react";
import Slider from "react-slick";

const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true, 
  autoplaySpeed: 5000
};

const SliderComponent = React.forwardRef(
  ({ ExtraSettings = {}, slides }, ref) => {
    const sliderRef = useRef();

    useImperativeHandle(ref, () => ({
      sliderRef: sliderRef.current,
    }));

    return (
      <div className="articleSlider">
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...{ ...SliderSettings, ...ExtraSettings }} ref={sliderRef}>
          {slides.map((slide, key) => (
            <div className="slide" key={key}>
                <div className="info">
                  <a href={slide.ArticleLink}>{slide.Title}</a><br />
                  {slide.Authors.map((author, index) => {
                    return <>{index > 0 ? ", " : ""}<a href={slide.ProfileLinks[index]} className="author">{author}</a></>
                  })}
                  
                  <p>{slide.Description}</p>
                </div>

                <a href={slide.ArticleLink}><img src={slide.Image} alt={slide.Author}></img></a>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
);

export default SliderComponent;
