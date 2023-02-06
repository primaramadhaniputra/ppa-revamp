import { Grid } from "@hudoro/neron";
import { IcEllipse } from "atoms/Icon";
import React from "react";
import { ISurveyReportCriticism } from "utils/interfaces";
import { Container, HeaderText, ValueText } from "./styles";

interface Iprops {
	data: ISurveyReportCriticism;
}
const Criticism = ({ data }: Iprops) => {
	return (
		<Container>
			<Grid container gap={8}>
				<HeaderText>{data.fullName}</HeaderText>
				<IcEllipse color="#D9D9D9" width={6} />
				<HeaderText>{data.position}</HeaderText>
			</Grid>
			<ValueText>{data.value}</ValueText>
		</Container>
	);
};

export default Criticism;
