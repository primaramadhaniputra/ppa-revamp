import React, { useEffect, useRef, useState } from "react";
import { DataTable, DescriptionContainer, TableContainer, Wrapper } from "./styles";
import { IcEllipse, IcFile, IcSum } from "atoms/Icon";
import { Grid, Text, fontFamilies } from "@hudoro/neron";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Person, Columns } from "./columns";
import { ButtonExport, IconContainer } from "./styles";
import { ProgressBar } from "atoms/Progress/styles";
import { useDownloadExcel } from "react-export-table-to-excel";
import { getReportManajemenRisiko } from "services/survey";
import { IParticipant, IReportManajemenRisiko } from "utils/interfaces";

// const defaultData: Person[] = [
// 	{
// 		firstName: "tanner",
// 		lastName: "linsley",
// 		age: 24,
// 		visits: 100,
// 		status: "In Relationship",
// 		progress: 50,
// 	},
// ];

const ManajemenRisiko = () => {
	// const [data] = React.useState(() => [...defaultData]);
	const [participant, setParticipant] = useState<IParticipant>();
	const [report, setReport] = useState<IReportManajemenRisiko[]>([]);
	const tableRef = useRef(null);

	const table = useReactTable({
		data: report,
		columns: Columns,
		getCoreRowModel: getCoreRowModel(),
	} as any);

	// const { onDownload } = useDownloadExcel({
	// 	currentTableRef: tableRef.current,
	// 	filename: "Users table",
	// 	sheet: "Users",
	// });

	const handleDownloadExcel = async () => {
		try {
			const response = await getReportManajemenRisiko({
				path: "reports/risk-management/excel",
			});
			// console.log("response", response.data.data);
			// const url = window.URL.createObjectURL(new Blob([response.data.data]));
			// const link = document.createElement("a");
			// link.href = url;
			// link.setAttribute("download", `report_manajemem_risiko.xls`);
			// document.body.appendChild(link);
			// link.click();
		} catch (error) {}
	};

	const handleGetManajemenRisiko = async () => {
		const response = await getReportManajemenRisiko({
			path: "reports/risk-management",
		});
		// const reports: IReportManajemenRisiko[] = response.data.data.reports;
		setReport(response.data.data.reports);
		setParticipant(response.data.data.participant);
		// const newReport = reports.map((item) => {
		// 	return {
		// 		questions: item.questions,
		// 	};
		// });

		// const newDatas = Object.entries(reports).map(([key, value]) => {
		// 	// console.log("values", value);
		// 	return {
		// 		typeMaterial: key,
		// 		name: value.name,
		// 	};
		// });
	};

	useEffect(() => {
		handleGetManajemenRisiko();
	}, []);

	// console.log("reportt", report);
	// console.log("newDatas", newDatas);
	return (
		<>
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
				<Grid container alignItems="center">
					<ButtonExport onClick={handleDownloadExcel}>
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
