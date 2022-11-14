import { Grid, Select } from "@hudoro/neron";
import React from "react";
import { Label, SelectContainer } from "./styles";

const dummySelect = [
	{
		id: "0",
		label: "Dani",
		values: "Dani",
	},
	{
		id: "1",
		label: "Dani Ganteng",
		values: "Dani Ganteng",
	},
];

interface IProps {
	title: string;
}

const StyledSelectInput = ({ title }: IProps) => {
	return (
		<Grid container alignItems="center" gap={20}>
			<Label>{title}</Label>
			<SelectContainer>
				<Select items={dummySelect} defaultValue={dummySelect[1]} />
			</SelectContainer>
		</Grid>
	);
};

export default StyledSelectInput;
