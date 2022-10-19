import React from "react";
import { Container } from "./styles";
import { Grid } from "@hudoro/neron";
import LineChart from "./LineChart";

const Chart = () => {
	return (
		<Container>
			<Grid>
				<LineChart />
			</Grid>
		</Container>
	);
};

export default Chart;
