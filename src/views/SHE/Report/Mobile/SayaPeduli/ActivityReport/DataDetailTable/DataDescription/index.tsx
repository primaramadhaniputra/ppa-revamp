import { Grid } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { StyledText } from "../styles";

const dataLeft = [
	{
		title: "Roster",
		desc: "Dinas",
	},
	{
		title: "Activity",
		desc: "Haoling",
	},
	{
		title: "Temp",
		desc: "35.2",
	},
	{
		title: "Risk",
		desc: "Tidak bersiko",
	},
];

const DataDescription = () => {
	return (
		<Grid container justifyContent="space-around" gap={15}>
			<Grid container flexDirection="column" gap={15}>
				{dataLeft.map((item, index) => (
					<Grid container alignItems="center" key={index}>
						<StyledText style={{ minWidth: "100px" }}>{item.title}</StyledText>
						<StyledText style={{ fontWeight: fontWeights.regular }}> : {item.desc}</StyledText>
					</Grid>
				))}
			</Grid>
			<Grid container flexDirection="column" gap={15}>
				{dataLeft.map((item, index) => (
					<Grid container alignItems="center" key={index}>
						<StyledText style={{ minWidth: "100px" }}>{item.title}</StyledText>
						<StyledText style={{ fontWeight: fontWeights.regular }}> : {item.desc}</StyledText>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default DataDescription;
