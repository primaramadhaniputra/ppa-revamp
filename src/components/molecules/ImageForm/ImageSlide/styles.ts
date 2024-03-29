import styled from "styled-components";

interface ILoginImageSlider {
	url: string;
}

export const SliderImage = styled.div<ILoginImageSlider>`
	/* background-image: ${(props) => `url(${props.url})`};
	background-size: cover;
	background-position: center; */
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0;
	transition: 1s;
	&.activeSlide {
		opacity: 1;
		transform: translateX(0);
	}
	&.lastSlide {
		transform: translateX(-100%);
	}
	&.nextSlide {
		transform: translateX(100%);
	}
`;
