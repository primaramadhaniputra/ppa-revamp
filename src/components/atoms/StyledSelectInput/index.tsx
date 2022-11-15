import { Grid, Select } from "@hudoro/neron";
import React from "react";
import { Label, SelectContainer } from "./styles";

const dummySelect = [
	{
		id: "0",
		label: "Pisang",
		values: "Pisang",
	},
	{
		id: "1",
		label: "Banana",
		values: "Banana",
	},
];

interface IProps {
	title: string;
}

const StyledSelectInput = ({ title }: IProps) => {
	return (
		<Grid container alignItems="center" gap={20}>
			<Grid style={{ maxWidth: "50px" }}>
				<Label>{title}</Label>
			</Grid>
			<SelectContainer style={{ flex: 1 }}>
				<Select items={dummySelect} defaultValue={dummySelect[1]} />
			</SelectContainer>
		</Grid>
	);
};

export default StyledSelectInput;
