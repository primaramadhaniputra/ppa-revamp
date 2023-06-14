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

const ManajemenRisiko = () => {
	const [participant, setParticipant] = useState<IParticipant>();
	const [report, setReport] = useState<Person[]>([]);
	const tableRef = useRef(null);

	const table = useReactTable({
		data: report,
		columns: Columns,
		getCoreRowModel: getCoreRowModel(),
	} as any);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "Users table",
		sheet: "Users",
	});

	// const handleDownloadExcel = async () => {
	// 	try {
	// 		const response = await getReportManajemenRisiko({
	// 			path: "reports/risk-management/excel",
	// 		});
	// 		console.log("response", response.data.data);
	// 		// const url = window.URL.createObjectURL(new Blob([response.data.data]));
	// 		// const link = document.createElement("a");
	// 		// link.href = url;
	// 		// link.setAttribute("download", `report_manajemem_risiko.xls`);
	// 		// document.body.appendChild(link);
	// 		// link.click();
	// 	} catch (error) {}
	// };

	const handleGetManajemenRisiko = async () => {
		const response = await getReportManajemenRisiko({
			path: "reports/risk-management",
		});
		const reports: IReportManajemenRisiko[] = response.data.data.reports;
		setParticipant(response.data.data.participant);
		const dataQuestions = [
			{
				questionName: reports[0].questions[0].multipleChoices[0].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[0].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[0].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[0].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[0].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[0].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[0].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[1].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[1].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[1].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[1].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[1].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[1].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[1].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[2].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[2].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[2].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[2].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[2].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[2].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[2].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[3].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[3].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[3].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[3].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[3].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[3].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[3].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[4].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[4].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[4].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[4].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[4].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[4].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[4].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[5].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[5].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[5].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[5].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[5].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[5].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[5].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[6].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[6].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[6].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[6].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[6].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[6].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[6].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[7].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[7].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[7].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[7].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[7].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[7].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[7].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[8].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[8].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[8].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[8].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[8].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[8].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[8].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[9].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[9].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[9].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[9].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[9].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[9].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[9].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[10].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[10].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[10].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[10].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[10].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[10].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[10].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[11].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[11].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[11].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[11].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[11].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[11].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[11].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[12].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[12].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[12].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[12].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[12].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[12].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[12].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[13].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[13].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[13].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[13].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[13].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[13].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[13].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[14].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[14].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[14].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[14].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[14].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[14].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[14].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[15].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[15].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[15].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[15].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[15].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[15].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[15].totalAnswer,
			},
			{
				questionName: reports[0].questions[0].multipleChoices[16].name,
				answerQuestionType1Branch1: reports[0].questions[0].multipleChoices[16].totalAnswer,
				answerQuestionType1Branch2: reports[0].questions[1].multipleChoices[16].totalAnswer,
				answerQuestionType2Branch1: reports[1].questions[0].multipleChoices[16].totalAnswer,
				answerQuestionType2Branch2: reports[1].questions[1].multipleChoices[16].totalAnswer,
				answerQuestionType3Branch1: reports[2].questions[0].multipleChoices[16].totalAnswer,
				answerQuestionType3Branch2: reports[2].questions[1].multipleChoices[16].totalAnswer,
			},
		];
		setReport(dataQuestions);
	};

	useEffect(() => {
		handleGetManajemenRisiko();
	}, []);

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
					<ButtonExport onClick={onDownload}>
						<IcFile width={20} color="transparent" />
						<span>Export</span>
					</ButtonExport>
				</Grid>
			</Grid>
			<Wrapper>
				{/* <DescriptionContainer>
					<Grid container gap={24}>
						<IcEllipse width={15} color="#29CC6A" />
						<Text variant="p">Jenis risiko yang kemungkinan tinggi untuk terjadi. </Text>
					</Grid>
					<Grid container gap={24}>
						<IcEllipse width={15} color="#FC5555" />
						<Text variant="p">Jenis risiko yang berdampak (“negatif” atau “positif” ) besar. </Text>
					</Grid>
				</DescriptionContainer> */}
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
