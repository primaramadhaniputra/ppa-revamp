import React, { useEffect, useState } from "react";
import { ImageUrl } from "utils/dummy";
import SlideImage from "./ImageSlide";
import { LoginSlider } from "./styled";

interface IProps {
	height?: string;
}

export default function ImageForm({ height }: IProps) {
	const [image] = useState(ImageUrl);
	const [index, setIndex] = useState(0);
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
		<LoginSlider height={height}>
			<SlideImage image={image} index={index} />
		</LoginSlider>
	);
}
