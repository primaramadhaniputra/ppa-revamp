import { Grid } from "@hudoro/neron";
import React from "react";
import { Input, Label, SelectWrapper, StyledSelect, Wrapper } from "./Styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	multiple?: boolean;
	isInput?: boolean;
	isInputSelect?: boolean;
	isLabel?: boolean;
	title?: string;
}

const UltimateInput = ({
	multiple,
	isInput,
	isInputSelect,
	isLabel,
	title = "dani ganteng",
	...rest
}: IProps) => {
	return (
		<Wrapper>
			{isLabel && (
				<Grid container>
					<Label>{title}</Label>
				</Grid>
			)}
			{isInput && (
				<Grid>
					<Input {...rest} />
				</Grid>
			)}
			{isInputSelect && (
				<SelectWrapper>
					<StyledSelect
						items={[
							{ id: "1", value: "testing", label: "Testing" },
							{ id: "2", value: "testing", label: "Testing" },
						]}
						multiple={multiple && multiple}
					/>
				</SelectWrapper>
			)}
		</Wrapper>
	);
};

export default UltimateInput;
