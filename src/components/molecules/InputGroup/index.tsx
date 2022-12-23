import React from "react";
import { StyledInput, StyledLabel, Wrapper } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	labelTitle: string;
	style?: React.CSSProperties;
}

const InputGroup = ({ labelTitle, style, ...rest }: IProps) => {
	return (
		<Wrapper>
			<StyledLabel style={{ ...style }}>{labelTitle}</StyledLabel>
			<StyledInput {...rest} />
		</Wrapper>
	);
};

export default InputGroup;
