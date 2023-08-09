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
			console.log('response', response.data.data)
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

	const tableRef = useRef(null);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "Users table",
		sheet: "Users",
	});

	return (
		<>
			<Grid container justifyContent="flex-end" style={{ marginTop: "20px" }}>
				<Button title="Download excel" onClick={onDownload} />
			</Grid>
			<Table ref={tableRef}>
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
								{item.data.map((data: any) => {
									// const total = data.companies.reduce((acc: any, curr: any) => {
									// 	const currValue = Number(curr.averageValue) || 0
									// 	const accValue = Number(acc.averageValue) || 0
									// 	return currValue + accValue
									// }, 0)
									return (
										<tr>
											<td>{data.name}</td>
											{data.companies.map((d: any) => <td>
												{d.averageValue}
											</td>)}
											{/* <td colSpan={42} style={{ textAlign: 'right' }}>
												{total}
											</td> */}
										</tr>
									)
								}
								)}
								<tr >
									<td style={{ textAlign: 'center' }} colSpan={2}>{item.sectionName}</td>
								</tr>
							</tbody>
						)
					}
					)
				}
				<tbody>
					<tr>
						<td colSpan={2} style={{ textAlign: "center", background: "#FFC001" }}>RATA RATA PER SITE</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td colSpan={2} style={{ textAlign: "center", background: "#FFC001" }}>SCORE</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td>Kritik & saran </td>
					</tr>
					{criticismAndSuggestions.map((item: any) => (
						<tr>
							<td style={{ verticalAlign: "middle" }}>{item.name}</td>
							<td>
								{item.data.map((data: any) => {
									return (
										data.value
									)
								})}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default TableExcel;
