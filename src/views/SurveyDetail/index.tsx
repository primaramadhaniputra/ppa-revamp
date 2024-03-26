import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Cookies from "js-cookie";
import Link from "next/link";
import CardDetail from "./CardDetail";
import StatusCard from "./StatusCard";
import { PeriodeText } from "./styles";
import Button from "atoms/Button";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { getReportSite } from "services/survey";
import { useDownloadExcel } from "react-export-table-to-excel";

const renderScore = (type: string) => {
	const number = Number(type);
	if (number < 6) return "Need Improvement (kurang)";
	if (number < 8) return "Enough (Cukup)";
	if (number < 10) return "Good (Bagus)";
	return "Excellent (Bagus Sekali)";
};

const SurveyDetail = () => {
	const site = Cookies.get("site");
	const periode = Cookies.get("periode");
	const parentCompany = Cookies.get("parentCompany");
	const router = useRouter();
	const tableRef = useRef(null);

	const [assessmentCriteria, setAssessmentCriteria] = useState([]);
	const [criticismAndSuggestions, setCriticismAndSuggestions] = useState([]);
	const [participants, setParticipants] = useState([]);
	const [newAssesmentCriteria, setNewAssesmentCriteria] = useState([]);

	const handleGetReportAllSite = async () => {
		try {
			const slug = (router.query.slug as string[])?.join("/");
			const response = await getReportSite({
				path: `${slug}`,
			});

			const assessmentCriteria = response.data.data.assessmentCriteria;
			setParticipants(response.data.data.participants);
			setCriticismAndSuggestions(response.data.data.criticismAndSuggestions);
			setAssessmentCriteria(assessmentCriteria);
			let newAssessmentCriteria: any = [];
      
			for (let i of assessmentCriteria) {
				const findSectionName = newAssessmentCriteria.find(
					(item: any) => item.sectionName === i.sectionName,
				);
				if (!findSectionName) {
					newAssessmentCriteria.push({ sectionName: i.sectionName, data: [i] });
				} else {
					const newData = newAssessmentCriteria.map((item: any) => {
						if (item.sectionName === findSectionName.sectionName) {
							return { ...item, data: [...item.data, i] };
						}
						return item;
					});
					newAssessmentCriteria = newData;
				}
			}
			setNewAssesmentCriteria(newAssessmentCriteria);
		} catch (error) {}
	};
	useEffect(() => {
		handleGetReportAllSite();
	}, []);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "Site",
		sheet: "Site",
	});

	// const renderColor = (value: number) => {
	// 	if (value < 6) return "#FF0000";
	// 	if (value < 8) return "#FFFF00";
	// 	if (value < 10) return "#008001";
	// 	return "#800080";
	// };
	console.log("test");

	const rataRataRowSite = (data: any) => {
		const elementRata: any = {};
		const elementLength: any = {};
		for (const element of data) {
			for (let i = 0; i < element.users.length; i++) {
				const averageValue = Number(element.users[i]?.averageValue);
				elementRata[i] = (elementRata[i] || 0) + averageValue;
				elementLength[i] = (elementLength[i] || 0) + (averageValue > 0 ? 1 : 0);
			}
		}
		const newElementRata = Object.keys(elementRata).map((index) => {
			return (elementRata[index] / elementLength[index]).toFixed(2);
		});

		return newElementRata;
	};
	return (
		<>
			<Grid container gap={10} alignItems="center" justifyContent="space-between">
				<Grid container gap={10}>
					<TitlePage type="h3" styles={{ fontSize: "22px" }}>
						<Link href="/dashboard/survey">Laporan Survey</Link> /{" "}
						<span style={{ fontSize: "16px", color: "rgba(170, 180, 198, 1)" }}>
							{site} ({parentCompany})
						</span>
					</TitlePage>
				</Grid>
				<PeriodeText>
					Survey : <span style={{ fontWeight: "600" }}>{periode}</span>
				</PeriodeText>
			</Grid>
			<Grid container justifyContent="flex-end" style={{ marginTop: "20px" }}>
				<Button title="Download Excel" onClick={onDownload} />
			</Grid>
			<table hidden ref={tableRef}>
				{/* <thead>
					<tr>
						<th>{site}</th>
					</tr>
					<tr>
						<th colSpan={11} style={{ background: "black", color: "white" }}>
							LAPORAN REKAPITULASI EVALUASI SURVEY KEPUASAN PELANGGAN {site}
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
				</thead> */}
				<thead>
					<tr>
						<th></th>
						<th>Standar skala index angka kepuasan pelanggan pt ppa adalah 8</th>
						{participants.map((item: any, indx) => {
							return <th key={indx}>{item.positionName}</th>;
						})}
					</tr>
				</thead>
				<thead>
					<tr>
						<th></th>
						<th>Kriteria Penilaian</th>
						{participants.map((item: any, indx) => {
							return <th key={indx}>{item.fullName}</th>;
						})}
						<th>rata rata</th>
					</tr>
				</thead>
				<tbody>
					{newAssesmentCriteria.map((item: any, idx) => {
						// for(let i = 0; i < item.datalength)
						const total: any = [];
						const divided: any = [];

						for (let i of item.data) {
							for (let j = 0; j < i.users.length; j++) {
								if (total[j]) {
									total[j] += Number(i.users[j].averageValue);
									if (Number(i.users[j].averageValue)) {
										divided[j] += 1;
									}
								} else {
									total[j] = Number(i.users[j].averageValue);
									divided[j] = 1;
								}
							}
						}

						const result = total.map((item: any, idx: any) => (item / divided[idx]).toFixed(2));
						const { res, div } = result.reduce(
							(acc: any, curr: any) => {
								acc.res += Number(curr);
								if (Number(curr)) {
									acc.div += 1;
								}
								return acc;
							},
							{ res: 0, div: 0 },
						);
						return (
							<Fragment key={idx}>
								<tr>
									<td style={{ verticalAlign: "middle" }}>{item.sectionName}</td>
									<td colSpan={10}>
										<table>
											{item.data.map((item: any, idx: any) => {
												const { value, divided } = item.users.reduce(
													(acc: any, curr: any) => {
														acc.value += Number(curr.averageValue);
														if (Number(curr.averageValue)) {
															acc.divided += 1;
														}
														return acc;
													},
													{ value: 0, divided: 0 },
												);
												return (
													<tr key={idx}>
														<td>{item.name}</td>
														{item.users.map((item: any, idx: any) => {
															return (
																<td
																	key={idx}
																	style={{
																		textAlign: "center",
																		border: "2px solid black",
																		backgroundColor: "white",
																		verticalAlign: "middle",
																		fontWeight: "bold",
																	}}
																>
																	{item.averageValue}
																</td>
															);
														})}
														<td style={{ verticalAlign: "middle" }}>
															{(value / (divided || 1)).toFixed(2)}
														</td>
													</tr>
												);
											})}
										</table>
									</td>
								</tr>
								<tr>
									<td colSpan={2} style={{ verticalAlign: "middle" }}>
										{item.sectionName}
									</td>
									{total.map((item: any, idx: any) => (
										<td>{(item / divided[idx]).toFixed(2)}</td>
									))}
									<td style={{ verticalAlign: "middle" }}>{(res / (div || 1)).toFixed(2)}</td>
								</tr>
							</Fragment>
						);
					})}
				</tbody>
				{/* <tbody>
					{assessmentCriteria.map((item: any, idx) => {
						const rata2 = item.users.reduce((acc: any, curr: any) => {
							return (acc += Number(curr.averageValue));
						}, 0);
						let length = 0;
						for (const i of item.users) {
							if (i.averageValue !== "0") {
								length++;
							}
						}
						return (
							<tr key={idx}>
								<td style={{ verticalAlign: "middle" }} colSpan={2}>
									{item.name}
								</td>
								{item.users.map((data: any, idx: number) => {
									return (
										<td
											key={idx}
											style={{
												textAlign: "center",
												border: "2px solid black",
												backgroundColor: "white",
												verticalAlign: "middle",
												background: renderColor(Number(data.averageValue)),
												fontWeight: "bold",
											}}
										>
											{data.averageValue}
										</td>
									);
								})}
								<td
									style={{
										verticalAlign: "middle",
										textAlign: "center",
										backgroundColor: renderColor(rata2 / length || 0),
										border: "2px solid black",
										fontWeight: "bold",
									}}
								>
									<b>{(rata2 / length || 0).toFixed(2)}</b>
								</td>
							</tr>
						);
					})}
				</tbody> */}
				<tbody>
					<tr>
						<td colSpan={2} style={{ textAlign: "center", background: "#FFC001" }}>
							RATA RATA PER SITE
						</td>
						{rataRataRowSite(assessmentCriteria).map((item, idx) => {
							return (
								<td
									key={idx}
									style={{
										textAlign: "center",
										// background: renderColor(Number(item)),
										fontWeight: "bold",
									}}
								>
									{item}
								</td>
							);
						})}
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td colSpan={2} style={{ textAlign: "center", background: "#FFC001" }}>
							SCORE
						</td>
						{rataRataRowSite(assessmentCriteria).map((item, idx) => {
							return (
								<td key={idx} style={{ textAlign: "center" }}>
									{renderScore(item)}
								</td>
							);
						})}
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td>
							<b>Kritik & Saran</b>
						</td>
					</tr>
					{criticismAndSuggestions.map((item: any, idx) => (
						<tr key={idx}>
							<td style={{ verticalAlign: "middle" }}>
								{item.fullName} - {item.positionName}
							</td>
							<td>{item.value}</td>
						</tr>
					))}
				</tbody>
			</table>
			<StatusCard />
			<CardDetail />
		</>
	);
};

export default SurveyDetail;
