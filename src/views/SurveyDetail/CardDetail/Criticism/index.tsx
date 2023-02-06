import { Grid } from "@hudoro/neron";
import { IcEllipse } from "atoms/Icon";
import React from "react";
import { timeConverter } from "utils/functions";
import { ISurveyReportCriticism } from "utils/interfaces";
import { Container, DateText, HeaderText, ValueText } from "./styles";

interface Iprops {
	data: ISurveyReportCriticism;
}
const Criticism = ({ data }: Iprops) => {
	return (
		<Container>
			<Grid container gap={20} alignItems="center">
				<Grid container gap={8} alignItems="center">
					<HeaderText>{data.fullName}</HeaderText>
					<IcEllipse color="#D9D9D9" width={6} />
					<HeaderText>{data.position}</HeaderText>
				</Grid>
				<Grid container style={{ marginLeft: "auto" }}>
					<DateText>{timeConverter(data.createdAt)}</DateText>
				</Grid>
			</Grid>
			<ValueText>{data.value}</ValueText>
		</Container>
	);
};

export default Criticism;
