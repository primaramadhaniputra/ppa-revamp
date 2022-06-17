import React, { useEffect, useState } from "react";
import { ImageUrl } from "utils/dummy";
import ButtonSlide from "./ButtonSlide";
import SlideImage from "./ImageSlide";
import { LoginSlider, SliderButton } from "./styled";

interface IProps {
  url: string;
}

export default function ImageForm({ url }: IProps) {
  // return <LoginImage urlImage={url}></LoginImage>;
  console.log(url);
  const [image, setImage] = useState(ImageUrl);
  const [index, setIndex] = useState(0);
  console.log(setImage);
  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <LoginSlider>
      <SlideImage image={image} index={index} />
      <SliderButton>
        <ButtonSlide
          iconName="IcArrowLeft"
          onClick={() => setIndex(index - 1)}
        />
        <ButtonSlide
          iconName="IcArrowRight"
          onClick={() => setIndex(index + 1)}
        />
      </SliderButton>
    </LoginSlider>
  );
}
