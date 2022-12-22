import { Grid } from "@hudoro/neron";
import React from "react";
import { useViewport } from "utils/hooks";
import ListEndContractTable from "./ListEndContractTable";
import MonitoringStatusTable from "./MonitoringStatusTable";
import SummaryTable from "./SummaryTable";

const EndContract = () => {
	const { width } = useViewport();
	console.log("width", width);
	return (
		<Grid>
			<Grid
				container
				gap={20}
				flexDirection={width < 1000 ? "column" : "row"}
				style={{ overflow: "scroll" }}
			>
				<SummaryTable />
				<MonitoringStatusTable />
			</Grid>
			<Grid style={{ marginTop: "50px" }}>
				<ListEndContractTable />
			</Grid>
		</Grid>
	);
};

export default EndContract;
