import React from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import { TableTitle, TopWrapper } from "../styles";
import DataTable from "./DataTable";
import PieChartTable from "./PieChart";
import SummaryTable from "./SummaryTable";

export default function Monitoring() {
	return (
		<>
			<TopWrapper>
				<LayoutTable>
					<TableTitle variant="h4" style={{ marginBottom: "30px" }}>
						Summary Komorbid
					</TableTitle>
					<SummaryTable />
				</LayoutTable>
				<LayoutTable>
					<TableTitle variant="h4" style={{ marginBottom: "30px" }}>
						Chart Komorbid
					</TableTitle>
					<PieChartTable />
				</LayoutTable>
			</TopWrapper>
			<LayoutTable>
				<TableTitle variant="h4">LIST MONITORING KOMORBID</TableTitle>
				<DataTable />
			</LayoutTable>
		</>
	);
}
