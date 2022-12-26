import React from "react";
import { StyledText } from "./styles";

interface IProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
}

const TitleText = ({ children, style }: IProps) => {
	return <StyledText style={{ ...style }}>{children}</StyledText>;
};

export default TitleText;
