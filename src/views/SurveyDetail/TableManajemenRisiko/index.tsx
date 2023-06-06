import React from "react";
import { DataTable, DescriptionContainer, TableContainer, Wrapper } from "./styles";
import { IcEllipse } from "atoms/Icon";
import { Grid, Text } from "@hudoro/neron";
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

type Person = {
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
	progress: number;
};

const defaultData: Person[] = [
	{
		firstName: "tanner",
		lastName: "linsley",
		age: 24,
		visits: 100,
		status: "In Relationship",
		progress: 50,
	},
	{
		firstName: "tandy",
		lastName: "miller",
		age: 40,
		visits: 40,
		status: "Single",
		progress: 80,
	},
	{
		firstName: "joe",
		lastName: "dirte",
		age: 45,
		visits: 20,
		status: "Complicated",
		progress: 10,
	},
];

const columnHelper = createColumnHelper<Person>();

const columns = [
	columnHelper.accessor("firstName", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span></span>,
	}),
	columnHelper.group({
		id: "hello",
		header: () => (
			<>
				<span style={{ lineHeight: "21px", color: "#969696" }}>Existing Busines</span>
				<br />
				<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
			</>
		),
		columns: [
			columnHelper.accessor("firstName", {
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#29CC6A" }} />,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: "lastName",
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#FC5555" }} />,
			}),
		],
	}),
	columnHelper.group({
		id: "hello",
		header: () => (
			<>
				<span style={{ lineHeight: "21px", color: "#969696" }}>Existing Busines</span>
				<br />
				<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
			</>
		),
		columns: [
			columnHelper.accessor("firstName", {
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#29CC6A" }} />,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: "lastName",
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#FC5555" }} />,
			}),
		],
	}),
	columnHelper.group({
		id: "hello",
		header: () => (
			<>
				<span style={{ lineHeight: "21px", color: "#969696" }}>Existing Busines</span>
				<br />
				<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
			</>
		),
		columns: [
			columnHelper.accessor("firstName", {
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#29CC6A" }} />,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: "lastName",
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#FC5555" }} />,
			}),
		],
	}),
];

const TableManajemenRisiko = () => {
	const [data] = React.useState(() => [...defaultData]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	} as any);

	return (
		<Wrapper>
			<DescriptionContainer>
				<Grid container gap={24}>
					<IcEllipse width={15} color="#29CC6A" />
					<Text variant="p">Jenis risiko yang kemungkinan tinggi untuk terjadi. </Text>
				</Grid>
				<Grid container gap={24}>
					<IcEllipse width={15} color="#FC5555" />
					<Text variant="p">Jenis risiko yang berdampak (“negatif” atau “positif” ) besar. </Text>
				</Grid>
			</DescriptionContainer>
			<TableContainer>
				<DataTable>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th key={header.id} colSpan={header.colSpan}>
										{header.isPlaceholder
											? null
											: flexRender(header.column.columnDef.header, header.getContext())}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
								))}
							</tr>
						))}
					</tbody>
				</DataTable>
			</TableContainer>
		</Wrapper>
	);
};

export default TableManajemenRisiko;
