import React from "react";
import { SliderImage } from "./styles";

interface IProps {
	image: string[];
	index: number;
}

export default function SlideImage({ image, index }: IProps) {
	return (
		<>
			{image.map((urlImage, imageIndex) => {
				let position = "nextSlide";
				if (imageIndex === index) {
					position = "activeSlide";
				}
				if (imageIndex === index - 1 || (index === 0 && imageIndex === image.length - 1)) {
					position = "lastSlide";
				}

				return <SliderImage url={urlImage} className={position} key={imageIndex}></SliderImage>;
			})}
		</>
	);
}
