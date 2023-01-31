import React, { useMemo } from "react";
import { ISurveyReportCriteria } from "utils/interfaces";

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
		<table ref={tableRef} hidden>
			<thead>
				<tr>
					<th style={{ border: "1px solid black", backgroundColor: "#D9E1F2" }} rowSpan={2}>
						No
					</th>
					<th style={{ border: "1px solid black", backgroundColor: "#D9E1F2" }} rowSpan={2}>
						Identitas Pelanggan
					</th>
					<th
						style={{ border: "1px solid black", backgroundColor: "#D9E1F2" }}
						colSpan={newArray.length}
					>
						Kriteria Penilaian
					</th>
					<th style={{ border: "1px solid black", backgroundColor: "#D9E1F2" }} rowSpan={2}>
						Jumlah
					</th>
					<th style={{ border: "1px solid black", backgroundColor: "#D9E1F2" }} rowSpan={2}>
						Rata rata
					</th>
					<th style={{ border: "1px solid black", backgroundColor: "#D9E1F2" }} rowSpan={2}>
						Score
					</th>
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
			<tbody>
				{reportCriteria.map((item, index) => {
					return (
						<tr key={index}>
							<td>{++index}</td>
							<td>{item.name}</td>
							{item.assessmentCriteria.sections.map((data) => {
								return data.questions.map((quest, idx) => <td key={idx}>{quest.average}</td>);
							})}
							<td>{item.assessmentCriteria.total}</td>
							<td>{item.assessmentCriteria.average}</td>
							<td>{item.assessmentCriteria.score}</td>
						</tr>
					);
				})}
			</tbody>
			{/* <tfoot>
        <tr >
          <td colSpan={2} style={{ border: "1px solid black" }}>
            Sum
          </td>
          <td style={{ border: "1px solid black" }}>$180</td>
          <td style={{ border: "1px solid black" }}>$180</td>
          <td style={{ border: "1px solid black" }}>$180</td>
          <td style={{ border: "1px solid black" }}>$180</td>
          <td style={{ border: "1px solid black" }}>$180</td>
          <td style={{ border: "1px solid black" }}>$180</td>
        </tr>
      </tfoot> */}
		</table>
	);
};

export default TableExcel;
