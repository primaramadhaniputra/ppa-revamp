import React, { useMemo } from "react";
import { ISurveyReportCriteria } from "utils/interfaces";
import { Table } from "./styles";

interface IProps {
	tableRef: React.MutableRefObject<null>;
	reportCriteria: ISurveyReportCriteria[];
}

const renderTextColor = (type: string) => {
	if (type === "SHEQ") {
		return "#548235";
	} else if (type === "ENGINEERING & PRODUCTION") {
		return "#305496";
	} else if (type === "HRGA & ADMIN") {
		return "#FFFF00";
	} else {
		return "#F8CBAD";
	}
};

const TableExcel = ({ tableRef, reportCriteria }: IProps) => {
	let newArray: number[] = [];

	useMemo(() => {
		reportCriteria[0]?.assessmentCriteria?.sections.map((item) => {
			for (let key in item.questions) {
				let obj = item.questions[key];
				newArray.push(obj.id);
			}
		});
	}, [newArray]);

	return (
		<Table ref={tableRef} hidden>
			<thead>
				<tr>
					<th rowSpan={2}>No</th>
					<th rowSpan={2}>Identitas Pelanggan</th>
					<th colSpan={newArray.length}>Kriteria Penilaian</th>
					<th rowSpan={2}>Jumlah</th>
					<th rowSpan={2}>Rata rata</th>
					<th rowSpan={2}>Score</th>
				</tr>
				<tr>
					{reportCriteria[0]?.assessmentCriteria?.sections.map((item) => {
						return item.questions.map((data, key) => (
							<th
								key={key}
								style={{
									border: "1px solid black",
									backgroundColor: renderTextColor(item.name),
									color: item.name === "HRGA & ADMIN" ? "black" : "white",
								}}
							>
								{data.id}
							</th>
						));
					})}
				</tr>
			</thead>
			<tbody style={{ border: "1px solid black" }}>
				{reportCriteria.map((item, index) => {
					return (
						<tr key={index}>
							<td>{++index}</td>
							<td>{item.name}</td>
							{item.assessmentCriteria.sections.map((data) => {
								return data.questions.map((quest, idx) => (
									<td key={idx}>{quest.average.toFixed(2).toString().split(".").join(",")}</td>
								));
							})}
							<td>{item.assessmentCriteria.total.toFixed(2).toString().split(".").join(",")}</td>
							<td>{item.assessmentCriteria.average.toFixed(2).toString().split(".").join(",")}</td>
							<td>{item.assessmentCriteria.score}</td>
						</tr>
					);
				})}
			</tbody>
			<tfoot>
				<tr>
					<th colSpan={3} style={{ border: "1px solid black", backgroundColor: "#D9E1F2" }}>
						Kritik dan saran
					</th>
				</tr>
				{reportCriteria.map((item, idx) => {
					return (
						<React.Fragment key={idx}>
							<tr>
								<th
									rowSpan={item.criticismAndSuggestions.length + 1}
									style={{ border: "1px solid black", backgroundColor: "#305496", color: "white" }}
								>
									{item.name}
								</th>
							</tr>
							{item.criticismAndSuggestions.map((data, idx) => (
								<tr key={idx}>
									<td style={{ border: "1px solid black", verticalAlign: "middle" }}>
										{data.fullName}
									</td>
									<td style={{ border: "1px solid black" }}>{data.value}</td>
								</tr>
							))}
						</React.Fragment>
					);
				})}
			</tfoot>
		</Table>
	);
};

export default TableExcel;