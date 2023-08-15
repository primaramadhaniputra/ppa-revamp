import React, { useEffect, useRef, useState } from "react";
import { ISurveyReportCriteria } from "utils/interfaces";
import { useDownloadExcel } from "react-export-table-to-excel";
import { Grid } from "@hudoro/neron";
import { Table } from "./styles";
import Button from "atoms/Button";
import { getReportAllsite } from "services/survey";
import Cookies from "js-cookie";
// import { ButtonDowload } from "../../FilterPeriode/styles";

interface IProps {
	reportCriteria: ISurveyReportCriteria[];
}

const renderTextColor = (type: string) => {
	const number = Number(type);
	if (number < 6) return "#FF0000";
	if (number < 8) return "#FFC001";
	if (number < 10) return "#01B050";
	return "#7030A0";
};
// reportCriteria
const TableExcel = ({}: IProps) => {
	// const newArray: number[] = [];
	// getReportAllsite
	const [allSite, setAllSite] = useState<any>([]);
	const [criticismAndSuggestions, setCriticismAndSuggestions] = useState([]);
	const [rataRataPerSite, setRataRataPerSite] = useState<{
		[x: string]: Array<number>;
	}>({});

	const periodeId = Cookies.get("periodeId");

	const handleGetReportAllSite = async () => {
		try {
			const response = await getReportAllsite({
				path: `/${periodeId}`,
			});
			const assessmentCriteria = response.data.data.assessmentCriteria;
			const criticismAndSuggestions = response.data.data.criticismAndSuggestions;
			setCriticismAndSuggestions(criticismAndSuggestions);
			const uniqueChars = [...new Set(assessmentCriteria.map((item: any) => item.sectionName))];

			// test calculate data
			const data: {
				[x: string]: Array<number>;
			} = {};
			for (let i = 0; i < assessmentCriteria.length; i++) {
				assessmentCriteria[i].companies.map((item: any) => {
					const number = Number(item.averageValue);
					return data[item.slug]
						? data[item.slug].push(Number(number.toFixed(2)))
						: (data[item.slug] = [Number(number.toFixed(2))]);
				});
			}

			setRataRataPerSite(data);

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
		} catch (error) {}
	};

	useEffect(() => {
		handleGetReportAllSite();
	}, []);

	const tableRef = useRef(null);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "All site",
		sheet: "All Sites",
	});

	const rataRataRowSite = (data: any) => {
		let rata = [];
		for (let i = 0; i < data.length; i++) {
			const testing = data[i].companies.map((item: any) => {
				return item.averageValue;
			});
			rata.push({ ...testing });
		}
		let nilai1 = 0;
		let nilai2 = 0;
		let nilai3 = 0;
		let nilai4 = 0;
		let nilai5 = 0;
		let nilai6 = 0;
		let nilai7 = 0;
		let nilai8 = 0;
		let nilai9 = 0;
		let nilai10 = 0;
		let nilai11 = 0;
		rata.map((item) => {
			for (const [key, value] of Object.entries(item)) {
				if (Number(key) === 0) {
					nilai1 += Number(value);
				} else if (Number(key) === 1) {
					nilai2 += Number(value);
				} else if (Number(key) === 2) {
					nilai3 += Number(value);
				} else if (Number(key) === 3) {
					nilai4 += Number(value);
				} else if (Number(key) === 4) {
					nilai5 += Number(value);
				} else if (Number(key) === 5) {
					nilai6 += Number(value);
				} else if (Number(key) === 6) {
					nilai7 += Number(value);
				} else if (Number(key) === 7) {
					nilai8 += Number(value);
				} else if (Number(key) === 8) {
					nilai9 += Number(value);
				} else if (Number(key) === 9) {
					nilai10 += Number(value);
				} else if (Number(key) === 10) {
					nilai11 += Number(value);
				}
			}
		});

		const newRata = [
			(nilai1 / data.length).toFixed(2),
			(nilai2 / data.length).toFixed(2),
			(nilai3 / data.length).toFixed(2),
			(nilai4 / data.length).toFixed(2),
			(nilai5 / data.length).toFixed(2),
			(nilai6 / data.length).toFixed(2),
			(nilai7 / data.length).toFixed(2),
			(nilai8 / data.length).toFixed(2),
			(nilai9 / data.length).toFixed(2),
			(nilai10 / data.length).toFixed(2),
			(nilai11 / data.length).toFixed(2),
		];
		return newRata;
	};

	console.log("rata", rataRataPerSite);

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
				{allSite.map((item: any, index: any) => {
					return (
						<tbody key={index}>
							<tr>
								<td style={{ verticalAlign: "middle" }} rowSpan={item.data.length + 1}>
									{item.sectionName}
								</td>
							</tr>
							{item.data.map((data: any) => {
								const total = data.companies.reduce(
									(acc: any, curr: any) => {
										// acc += Number(curr.averageValue)
										acc.total += Number(curr.averageValue);
										return acc;
									},
									{ total: 0 },
								);
								return (
									<tr>
										<td>{data.name}</td>
										{data.companies.map((d: any) => (
											<td
												style={{
													backgroundColor: renderTextColor(d.averageValue),
													border: "1px solid black",
													color: "white",
													textAlign: "center",
												}}
											>
												<b>{Number(d.averageValue).toFixed(2)}</b>
											</td>
										))}
										<td
											style={{
												textAlign: "center",
												background: renderTextColor((total.total / 11).toFixed(2)),
												border: "1px solid black",
												color: "white",
											}}
										>
											<b>{(total.total / 11).toFixed(2)}</b>
										</td>
									</tr>
								);
							})}
							<tr>
								<td style={{ textAlign: "center" }} colSpan={2}>
									{item.sectionName}
								</td>
								{rataRataRowSite(item.data).map((item) => {
									return <td>{item}</td>;
								})}
								<td></td>
							</tr>
						</tbody>
					);
				})}
				<tbody>
					<tr>
						<td colSpan={2} style={{ textAlign: "center", background: "#FFC001" }}>
							RATA RATA PER SITE
						</td>
						<td>
							{(
								rataRataPerSite.abp?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.abp?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite.adw?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.adw?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite.ami?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.ami?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite.ba?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.ba?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite.bcp?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.bcp?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite.bib?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.bib?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite["bib-rom"]?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite["bib-rom"]?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite.mhu?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.mhu?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite.mip?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.mip?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite.mlp?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.mlp?.length
							).toFixed(2)}
						</td>
						<td>
							{(
								rataRataPerSite.sks?.reduce((acc, curr) => {
									return (acc += curr);
								}, 0) / rataRataPerSite.sks?.length
							).toFixed(2)}
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td colSpan={2} style={{ textAlign: "center", background: "#FFC001" }}>
							SCORE
						</td>
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
									return data.value;
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
