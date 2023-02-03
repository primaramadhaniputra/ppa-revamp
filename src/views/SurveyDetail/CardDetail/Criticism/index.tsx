import React from "react";
import { ISurveyReportCriticism } from "utils/interfaces";
import { Container, HeaderText, ValueText } from "./styles";

interface Iprops {
	data: ISurveyReportCriticism;
}

const Criticism = ({ data }: Iprops) => {
	return (
		<Container>
			<HeaderText>{data.fullName}</HeaderText>
			<ValueText>{data.value}</ValueText>
		</Container>
	);
};

export default Criticism;
