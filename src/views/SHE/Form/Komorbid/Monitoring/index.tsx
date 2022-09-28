import React from "react";
import { WrapperTable } from "../../styles";
import { TableTitle, TopWrapper } from "../styles";
import DataTable from "./DataTable";
import PieChartTable from "./PieChart";
import SummaryTable from "./SummaryTable";

export default function Monitoring() {
	return (
		<>
			<TopWrapper>
				<WrapperTable>
					<TableTitle variant="h4" style={{ marginBottom: "30px" }}>
						Summary Komorbid
					</TableTitle>
					<SummaryTable />
				</WrapperTable>
				<WrapperTable>
					<TableTitle variant="h4" style={{ marginBottom: "30px" }}>
						Chart Komorbid
					</TableTitle>
					<PieChartTable />
				</WrapperTable>
			</TopWrapper>
			<WrapperTable style={{ marginTop: "20px" }}>
				<TableTitle variant="h4">LIST MONITORING KOMORBID</TableTitle>
				<DataTable />
			</WrapperTable>
		</>
	);
}
