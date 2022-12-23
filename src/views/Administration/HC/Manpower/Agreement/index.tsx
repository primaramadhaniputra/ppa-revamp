import { Grid } from "@hudoro/neron";
import React from "react";
import { useWindowDimensions } from "utils/functions";
import SummaryPkwt from "./SummaryPkwt";
import { Container } from "./styles";
import dynamic from "next/dynamic";
import TableMasaPkwtKaryawan from "./TableMasaPkwtKaryawan";

const DoughnutChart = dynamic(() => import("./DoughnutChart"), {
	ssr: false,
});

const Agreement = () => {
	const { width } = useWindowDimensions();

	return (
		<Grid>
			<Container flexDirection={width < 1000 ? "column" : "row"}>
				<SummaryPkwt />
				<div className="chartContainer">
					<DoughnutChart />
				</div>
			</Container>
			<Grid style={{ marginTop: "50px" }}>
				<TableMasaPkwtKaryawan />
			</Grid>
		</Grid>
	);
};

export default Agreement;
