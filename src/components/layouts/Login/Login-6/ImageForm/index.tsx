import React, { useState } from "react";
import { ImageUrl } from "utils/dummy";
import SlideImage from "./ImageSlide";
import { LoginSlider } from "./styled";

export default function ImageForm() {
  const [image] = useState(ImageUrl);
  const [index] = useState(0);

  return (
    <LoginSlider>
      <SlideImage image={image} index={index} />
    </LoginSlider>
  );
}
