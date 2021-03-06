import React, { useState } from "react";
import { ImageUrl } from "utils/dummy";
import SlideImage from "./ImageSlide";
import { LoginSlider } from "./styled";

export default function ImageForm() {
  const [image] = useState(ImageUrl);
  const [index] = useState(0);
  // console.log(setImage, setIndex);
  // useEffect(() => {
  //   const lastIndex = image.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, image]);

  // useEffect(() => {
  //   const slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  return (
    <LoginSlider>
      <SlideImage image={image} index={index} />
    </LoginSlider>
  );
}
