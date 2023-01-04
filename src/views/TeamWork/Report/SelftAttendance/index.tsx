import React from "react";
import { Box, BoxContainer, StatusText, WrapperStatus } from "./styles";
import { ColumnDef } from "@tanstack/react-table";
import DateText from "atoms/DateText";
import TitleText from "atoms/TitleText";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Grid } from "@hudoro/neron";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "-",
		["#"]: "-",
		["in"]: "-",
		["Out"]: "-",
		["Job"]: "-",
	};
});

export default function SelfAttendance() {
	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "Date",
			cell: (info) => info.renderValue(),
			header: () => <span>Date</span>,
		},
		{
			accessorKey: "#",
			cell: (info) => info.renderValue(),
			header: () => <span></span>,
		},
		{
			header: "Check",
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: "in",
					cell: (info) => info.renderValue(),
					header: () => <span>In</span>,
				},
				{
					accessorKey: "Out",
					cell: (info) => info.renderValue(),
					header: () => <span>Out</span>,
				},
			],
		},
		{
			accessorKey: "Job",
			cell: (info) => info.renderValue(),
			header: () => <span>Job</span>,
		},
	];

	return (
		<>
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<TitleText>Self Attendance</TitleText>
					<DateText />
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
				<WrapperStatus>
					<BoxContainer>
						<StatusText>On Going</StatusText>
						<Box style={{ backgroundColor: "#EFE44C" }}></Box>
					</BoxContainer>
					<BoxContainer>
						<StatusText>Ok</StatusText>
						<Box style={{ backgroundColor: "#25B78A" }}></Box>
					</BoxContainer>
					<BoxContainer>
						<StatusText>Rejected</StatusText>
						<Box style={{ backgroundColor: "#FF0008" }}></Box>
					</BoxContainer>
				</WrapperStatus>
			</LayoutTable>
		</>
	);
}
