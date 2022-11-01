import React from "react";
import { StyledText } from "./styles";

interface IProps {
	children: React.ReactNode;
}

const TitleText = ({ children }: IProps) => {
	return <StyledText>{children}</StyledText>;
};

export default TitleText;
