import React from "react";
import DoughnutChart from "./DoughnutChart";
import { ColumnDef } from "@tanstack/react-table";
import { DoughnutWrapper, TableWrapper, Wrapper } from "./styles";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		Model: "-",
		CN: "-",
		SN: `-`,
		["Last Download"]: "-",
		["Last Operation"]: "-",
		["Pldcycn Record"]: "- ",
		["Trend Record"]: "- ",
		["Fault Record"]: "- ",
		["Machine History"]: "- ",
	},
];

export default function VHMSDownload() {
	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "Model",
			cell: (info) => info.getValue(),
			header: () => <span>Model</span>,
			footer: (props) => props.column.id,
		},
		{
			accessorFn: (row) => row.CN,
			id: "CN",
			cell: (info) => info.getValue(),
			header: () => <span>CN</span>,
			footer: (props) => props.column.id,
		},
		{
			accessorKey: "SN",
			header: () => <span>SN</span>,
			footer: (props) => props.column.id,
		},

		{
			accessorKey: "Last Download",
			header: () => <span>Last Download</span>,
			footer: (props) => props.column.id,
		},
		{
			accessorKey: "Last Operation",
			header: () => <span>Last Operation</span>,
			footer: (props) => props.column.id,
		},
		{
			header: "VHMS Latest",
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: "Pldcycn Record",
					header: () => <span>Pldcycn Record</span>,
					footer: (props) => props.column.id,
				},
				{
					accessorKey: "Trend Record",
					header: () => <span>Trend Record</span>,
					footer: (props) => props.column.id,
					cell: (info) => <span>{info.getValue()}</span>,
				},
				{
					accessorKey: "Fault Record",
					header: () => <span>Fault Record</span>,
					footer: (props) => props.column.id,
					cell: (info) => <span>{info.getValue()}</span>,
				},
				{
					accessorKey: "Machine History",
					header: () => <span>Machine History</span>,
					footer: (props) => props.column.id,
				},
			],
		},
	];

	return (
		<Wrapper>
			<TableWrapper>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</TableWrapper>
			<DoughnutWrapper>
				<DoughnutChart />
			</DoughnutWrapper>
		</Wrapper>
	);
}
