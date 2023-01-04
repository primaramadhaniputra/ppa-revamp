import React from "react";
import DoughnutChart from "atoms/DoughnutChart";
import { ColumnDef } from "@tanstack/react-table";
import { DoughnutWrapper, TableWrapper, Wrapper } from "./styles";
import CompleteArrow from "atoms/CompleteArrow";
import { THContainer } from "atoms/THContainer";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		Model: "HD787",
		CN: "Hd123",
		SN: `33${index}`,
		["Last Download"]: "2022-17-08",
		["Last Operation"]: "2022-17-08",
		["Pldcycn Record"]: "2022-17-08 02:12:12",
		["Trend Record"]: "2022-17-08 02:12:12",
		["Fault Record"]: "2022-17-08 02:12:12",
		["Machine History"]: "2022-17-08 02:12:12",
	};
});

export default function VHMSDownload() {
	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "Model",
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer>
					<span>Model</span>
					<CompleteArrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},
		{
			accessorFn: (row) => row.CN,
			id: "CN",
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer>
					<span>CN</span>
					<CompleteArrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},
		{
			accessorKey: "SN",
			header: () => (
				<THContainer>
					<span>SN</span>
					<CompleteArrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},

		{
			accessorKey: "Last Download",
			header: () => (
				<THContainer>
					<span>Last Download</span>
					<CompleteArrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},
		{
			accessorKey: "Last Operation",
			header: () => (
				<THContainer>
					<span>Last Operation</span>
					<CompleteArrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},
		{
			header: "VHMS Latest",
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: "Pldcycn Record",
					header: () => (
						<THContainer>
							<span>Pldcycn Record</span>
							<CompleteArrow />
						</THContainer>
					),
					footer: (props) => props.column.id,
				},
				{
					accessorKey: "Trend Record",
					header: () => (
						<THContainer>
							<span>Trend Record</span>
							<CompleteArrow />
						</THContainer>
					),
					footer: (props) => props.column.id,
					cell: (info) => <span>{info.getValue()}</span>,
				},
				{
					accessorKey: "Fault Record",
					header: () => (
						<THContainer>
							<span>Fault Record</span>
							<CompleteArrow />
						</THContainer>
					),
					footer: (props) => props.column.id,
					cell: (info) => <span>{info.getValue()}</span>,
				},
				{
					accessorKey: "Machine History",
					header: () => (
						<THContainer>
							<span>Machine History</span>
							<CompleteArrow />
						</THContainer>
					),
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
