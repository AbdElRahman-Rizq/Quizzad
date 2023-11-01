import  { useRef } from "react";

export function useSlider() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
        event.preventDefault();
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
        event.preventDefault();
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

  return { sliderRef, next, previous, settings };
}