import React from "react";
import { ProgressBar } from "./styles";

interface IProps extends React.ProgressHTMLAttributes<HTMLProgressElement> {
	style: React.CSSProperties;
}

const Progress = ({ style, ...rest }: IProps) => {
	return (
		<ProgressBar style={{ ...style }} {...rest}>
			Progress
			<progress></progress>
		</ProgressBar>
	);
};

export default Progress;
