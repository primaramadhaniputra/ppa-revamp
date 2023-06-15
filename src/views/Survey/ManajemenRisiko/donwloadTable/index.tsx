import { Grid, Text, fontFamilies } from "@hudoro/neron";
import React, { useRef } from "react";
import { ButtonExport, IconContainer } from "../styles";
import { IcFile, IcSum } from "atoms/Icon";
import { ProgressBar } from "atoms/Progress/styles";
import { IParticipant } from "utils/interfaces";
import { useDownloadExcel } from "react-export-table-to-excel";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Columns } from "./columns";

interface IProps {
	participant: IParticipant | undefined;
	data: [];
}

const DonwloadTable = ({ participant, data }: IProps) => {
	const tableRef = useRef(null);

	const table = useReactTable({
		data,
		columns: Columns,
		getCoreRowModel: getCoreRowModel(),
	} as any);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "manajemen risiko",
		sheet: "manajemen risiko",
	});
	return (
		<Grid container gap={24} style={{ flex: 1, marginTop: "30px" }} alignItems="center">
			<IconContainer>
				<IcSum width={32} color="#2F88FF" />
			</IconContainer>
			<Grid container flexDirection="column" gap={10} style={{ flex: 1 }}>
				<Text variant="h4" style={{ fontSize: "15px", lineHeight: "24px" }}>
					{participant?.hasAnwer} / {participant?.total} participants
				</Text>
				<Grid container gap={16} alignItems="center">
					<ProgressBar style={{ width: "265px" }} value={participant?.percent} max={"100"} />
					<span style={{ fontFamily: fontFamilies.poppins, fontSize: "14px" }}>
						{participant?.percent}%
					</span>
				</Grid>
			</Grid>
			<table hidden ref={tableRef}>
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
			</table>
			<Grid container alignItems="center">
				<ButtonExport onClick={onDownload}>
					<IcFile width={20} color="transparent" />
					<span>Export</span>
				</ButtonExport>
			</Grid>
		</Grid>
	);
};

export default DonwloadTable;
