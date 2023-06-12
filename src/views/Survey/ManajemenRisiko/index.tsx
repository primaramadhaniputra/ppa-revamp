import React, { useRef } from "react";
import { DataTable, DescriptionContainer, TableContainer, Wrapper } from "./styles";
import { IcEllipse, IcFile, IcSum } from "atoms/Icon";
import { Grid, Text, fontFamilies } from "@hudoro/neron";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Person, Columns } from "./columns";
import { ButtonExport, IconContainer } from "./styles";
import { ProgressBar } from "atoms/Progress/styles";
import { useDownloadExcel } from "react-export-table-to-excel";

const defaultData: Person[] = [
	{
		firstName: "tanner",
		lastName: "linsley",
		age: 24,
		visits: 100,
		status: "In Relationship",
		progress: 50,
	},
];

const ManajemenRisiko = () => {
	const [data] = React.useState(() => [...defaultData]);
	const tableRef = useRef(null);

	const table = useReactTable({
		data,
		columns: Columns,
		getCoreRowModel: getCoreRowModel(),
	} as any);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "Users table",
		sheet: "Users",
	});

	return (
		<>
			<Grid container gap={24} style={{ flex: 1, marginTop: "30px" }} alignItems="center">
				<IconContainer>
					<IcSum width={32} color="#2F88FF" />
				</IconContainer>
				<Grid container flexDirection="column" gap={10} style={{ flex: 1 }}>
					<Text variant="h4" style={{ fontSize: "15px", lineHeight: "24px" }}>
						850 / 1000 participants
					</Text>
					<Grid container gap={16} alignItems="center">
						<ProgressBar style={{ width: "265px" }} value={"75"} max={"100"} />
						<span style={{ fontFamily: fontFamilies.poppins, fontSize: "14px" }}>75%</span>
					</Grid>
				</Grid>
				<Grid container alignItems="center">
					<ButtonExport onClick={onDownload}>
						<IcFile width={20} color="transparent" />
						<span>Export</span>
					</ButtonExport>
				</Grid>
			</Grid>
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
					<DataTable ref={tableRef}>
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
										<td key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</DataTable>
				</TableContainer>
			</Wrapper>
		</>
	);
};

export default ManajemenRisiko;
