import React from "react";
import { Wrapper } from "./styles";

interface IProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
}

const LayoutTable = ({ children, style }: IProps) => {
	return <Wrapper style={{ ...style }}>{children}</Wrapper>;
};

export default LayoutTable;
