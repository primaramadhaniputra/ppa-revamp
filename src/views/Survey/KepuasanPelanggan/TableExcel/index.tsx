import React, { useEffect, useRef, useState } from "react";
import { ISurveyReportCriteria } from "utils/interfaces";
import { useDownloadExcel } from "react-export-table-to-excel";
import { Grid } from "@hudoro/neron";
import { Table } from "./styles";
import Button from "atoms/Button";
import { getReportAllsite } from "services/survey";
// import { ButtonDowload } from "../../FilterPeriode/styles";

interface IProps {
	reportCriteria: ISurveyReportCriteria[];
}

// const renderTextColor = (type: string) => {
// 	if (type === "SHEQ") {
// 		return "#548235";
// 	}
// 	if (type === "ENGINEERING & PRODUCTION") {
// 		return "#305496";
// 	}
// 	if (type === "HRGA & ADMIN") {
// 		return "#FFFF00";
// 	}
// 	return "#F8CBAD";
// };
// reportCriteria
const TableExcel = ({ }: IProps) => {
	// const newArray: number[] = [];
	// getReportAllsite
	const [allSite, setAllSite] = useState<any>([]);
	const [criticismAndSuggestions, setCriticismAndSuggestions] = useState([]);

	const handleGetReportAllSite = async () => {
		try {
			const response = await getReportAllsite({});
			const assessmentCriteria = response.data.data.assessmentCriteria;
			const criticismAndSuggestions = response.data.data.criticismAndSuggestions;
			setCriticismAndSuggestions(criticismAndSuggestions);
			const uniqueChars = [...new Set(assessmentCriteria.map((item: any) => item.sectionName))];
			const newData = uniqueChars.map((item) => {
				return {
					sectionName: item,
					data: assessmentCriteria
						.filter((datas: any) => datas.sectionName === item)
						.map((item: any) => {
							const sortingItem = item.companies.sort((a: any, b: any) => {
								let fa = a.slug.toLowerCase(),
									fb = b.slug.toLowerCase();

								if (fa < fb) {
									return -1;
								}
								if (fa > fb) {
									return 1;
								}
								return 0;
							});

							return { ...item, companies: sortingItem };
						}),
				};
			});
			setAllSite(newData);
		} catch (error) { }
	};
	useEffect(() => {
		handleGetReportAllSite();
	}, []);

	// useMemo(() => {
	// 	reportCriteria[0]?.assessmentCriteria?.sections.map((item) => {
	// 		for (const key in item.questions) {
	// 			const obj = item.questions[key];
	// 			newArray.push(obj.id);
	// 		}
	// 	});
	// }, [newArray]);

	const tableRef = useRef(null);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "Users table",
		sheet: "Users",
	});

	console.log('allsite', allSite);

	return (
		<>
			<Grid container justifyContent="flex-end" style={{ marginTop: "20px" }}>
				<Button title="Download excel" onClick={onDownload} />
			</Grid>
			<Table hidden ref={tableRef}>
				<thead>
					<tr>
						<th>ppa</th>
						<th colSpan={10}>
							FULL SERVICE MINING CONTRACTOR PT. PUTRA PERKASA ABADI OFFICE: GEDUNG OFFICE 8 LT. 8 ,
							JL. SENOPATI RAYA NO.8 B RT.01, RW.02 SENAYAN KEBAYORAN BARU - JAKARTA TEL:
							021-57903456 (7) FAX: 021-57903458
						</th>
					</tr>
					<tr>
						<th colSpan={11} style={{ background: "black", color: "white" }}>
							LAPORAN REKAPITULASI EVALUASI SURVEY KEPUASAN PELANGGAN TAHUN 2023 SEMESTER 1 PPA SITE
							BUKIT ASAM
						</th>
					</tr>
					<tr>
						<th colSpan={11}>Score :</th>
					</tr>
					<tr>
						<th style={{ background: "red", color: "black" }}>1 sampai 5</th>
						<th colSpan={10}>need improvement(kurang)</th>
					</tr>
					<tr>
						<th style={{ background: "yellow", color: "black" }}>6 sampai 7</th>
						<th colSpan={10}>enough (Cukup)</th>
					</tr>
					<tr>
						<th style={{ background: "green", color: "black" }}>8 sampai 9</th>
						<th colSpan={10}>good (bagus)</th>
					</tr>
					<tr>
						<th style={{ background: "purple", color: "black" }}>10</th>
						<th colSpan={10}>excellent (bagus sekali)</th>
					</tr>
				</thead>
				<thead>
					<tr>
						<th colSpan={2}>kriteria penilaian</th>
						{allSite[0]?.data[0].companies.map((item: any) => {
							return <td>site {item.slug}</td>;
						})}
						<td>rata rata</td>
					</tr>
				</thead>
				{
					allSite.map((item: any, index: any) => {
						console.log('item', item.data)
						return (
							<tbody key={index}>
								<tr >
									<td style={{ verticalAlign: "middle" }} rowSpan={item.data.length + 1}>{item.sectionName}</td>
								</tr>
								{item.data.map((data: any) =>
									<tr>
										<td>{data.name}</td>
										{data.companies.map((d: any) => <td>
											{d.averageValue}
										</td>)}
									</tr>
								)}
							</tbody>
						)
					}
					)
				}
				<tbody>
					<>
						{/* {allSite.map(item => {
							return <tr>
								<td >{item.sectionName}</td>
							</tr>
						})} */}
						{/* {allSite.map((item: any) =>
							item.data.map((datas: any) => (
								<tr>
									<td colSpan={2}>
										{datas.name}
										<b>({datas.sectionName})</b>
									</td>
									{datas.companies.map((item: any) => (
										<td>{Number(item.averageValue).toFixed(2)}</td>
									))}
								</tr>
							)),
						)} */}
						<tr>
							<td>Kritik & saran </td>
						</tr>
						{criticismAndSuggestions.map((item: any) => (
							<tr>
								<td style={{ verticalAlign: "middle" }}>{item.name}</td>
								<td>
									<ol>
										{item.data.map((data: any) => (
											<li>{data.value}</li>
										))}
									</ol>
								</td>
							</tr>
						))}
						{/* <tr style={{ backgroundColor: 'red' }}>
							<td rowSpan={4}>SHE</td>
						</tr>
						<tr>
							<td>AFR (Accident Frequency Rate)</td>
							<td>1</td>
							<td>1</td>
							<td>1</td>
							<td>1</td>
							<td>1</td>
						</tr>
						<tr>
							<td>AFR (Accident Frequency Rate)</td>
						</tr>
						<tr>
							<td>AFR (Accident Frequency Rate)</td>
						</tr> */}
					</>
					{/* <tr>
						<td colSpan={100}>Standar skala index angka kepuasan pelanggan PT.PPA adalah 8 (DELAPAN).</td>
					</tr> */}
					{/* <tr>
						<td colSpan={2}>Kriteria Penilaian</td>
						{allSite[0]?.data[0].companies.map((item: any) => {
							return <td >{item.slug}</td>
						})}
					</tr> */}
					{/* {allSite.map((item: any) => {
						return <tr >
							<td style={{ verticalAlign: "middle" }} rowSpan={item.data.length + 1} >
								{item.sectionName}
							</td>
							{
								item.data.map((item: any) => {
									return <>
										<tr>
											<td >{item.name}</td>
										</tr>
									</>
								})
							}
						</tr>
					})} */}
				</tbody>
				{/* <tr>
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
								<td>{item.assessmentCriteria.total?.toFixed(2).toString().split(".").join(",")}</td>
								<td>
									{item.assessmentCriteria.average?.toFixed(2).toString().split(".").join(",")}
								</td>
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
										style={{
											border: "1px solid black",
											backgroundColor: "#305496",
											color: "white",
										}}
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
				</tfoot> */}
			</Table>
			{/* <Table ref={tableRef} hidden>
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
								<td>{item.assessmentCriteria.total?.toFixed(2).toString().split(".").join(",")}</td>
								<td>
									{item.assessmentCriteria.average?.toFixed(2).toString().split(".").join(",")}
								</td>
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
										style={{
											border: "1px solid black",
											backgroundColor: "#305496",
											color: "white",
										}}
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
			</Table> */}
		</>
	);
};

export default TableExcel;
