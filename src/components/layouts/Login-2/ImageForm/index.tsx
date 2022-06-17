import { Icon } from "@hudoro/neron";
import React, { useEffect, useState } from "react";
import { ImageUrl } from "utils/dummy";
import {
  LoginSlider,
  SliderButton,
  SliderButtonWrapper,
  SliderImage,
} from "./styled";

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
      {image.map((urlImage, imageIndex) => {
        let position = "nextSlide";
        if (imageIndex === index) {
          position = "activeSlide";
        }
        if (
          imageIndex === index - 1 ||
          (index === 0 && imageIndex === image.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <SliderImage
            url={urlImage}
            className={position}
            key={imageIndex}
          ></SliderImage>
        );
      })}
      <SliderButton>
        <SliderButtonWrapper>
          <Icon
            iconName="IcArrowLeft"
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => setIndex(index - 1)}
            color="white"
          />
        </SliderButtonWrapper>
        <SliderButtonWrapper>
          <Icon
            iconName="IcArrowRight"
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => setIndex(index + 1)}
            color="white"
          />
        </SliderButtonWrapper>
      </SliderButton>
    </LoginSlider>
  );
}
