import React from "react";
import { Container } from "./styles";
import { Grid, Text } from "@hudoro/neron";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

const Chart = () => {
	return (
		<Container>
			<Grid
				container
				flexDirection="column"
				alignItems="center"
				gap={30}
				style={{ maxWidth: "400px", margin: "30px auto" }}
			>
				<DoughnutChart />
				<Text variant="h3">126.7 Lt/h</Text>
			</Grid>
			<Grid>
				<LineChart />
			</Grid>
		</Container>
	);
};

export default Chart;
