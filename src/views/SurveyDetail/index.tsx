import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Cookies from "js-cookie";
import Link from "next/link";
import CardDetail from "./CardDetail";
import StatusCard from "./StatusCard";
import { PeriodeText } from "./styles";
import Button from "atoms/Button";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { getReportSite } from "services/survey";
import { useDownloadExcel } from "react-export-table-to-excel";

const SurveyDetail = () => {
	const site = Cookies.get("site");
	const periode = Cookies.get("periode");
	const parentCompany = Cookies.get("parentCompany");
	const router = useRouter();
	const tableRef = useRef(null);

	const [assessmentCriteria, setAssessmentCriteria] = useState([]);
	const [criticismAndSuggestions, setCriticismAndSuggestions] = useState([]);

	const handleGetReportAllSite = async () => {
		try {
			const slug = (router.query.slug as string[])?.join("/");
			const response = await getReportSite({
				path: `/${slug}`,
			});
			console.log('respnose', response.data.data)
			setCriticismAndSuggestions(response.data.data.criticismAndSuggestions);
			setAssessmentCriteria(response.data.data.assessmentCriteria);
		} catch (error) { }
	};
	useEffect(() => {
		handleGetReportAllSite();
	}, []);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "Site",
		sheet: "Site",
	});

	const renderColor = (value: number) => {
		if (value < 6) return "#FF0000";
		if (value < 8) return "#FFFF00";
		if (value < 10) return "#008001";
		return "#800080";
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
						<th colSpan={2}>Standar skala index angka kepuasan pelanggan pt ppa adalah 8</th>
					</tr>
				</thead>
				<thead>
					<tr>
						<th colSpan={2}>Kriteria Penilaian</th>
					</tr>
				</thead>
				<tbody>
					{assessmentCriteria.map((item: any) => {
						const rata2 = item.users.reduce((acc: any, curr: any) => {
							return (acc += Number(curr.averageValue));
						}, 0);

						return (
							<tr>
								<td style={{ verticalAlign: "middle" }} colSpan={2}>
									{item.name}
								</td>
								{item.users.map((data: any) => {
									return (
										<td
											style={{
												textAlign: "center",
												color: "black",
												border: "2px solid black",
												backgroundColor: "white",
											}}
										>
											<b>({data.positionName})</b>
											<br />
											{data.name}
											<br />
											<span style={{ color: renderColor(Number(data.averageValue)) }}>
												<b>{data.averageValue}</b>
											</span>
										</td>
									);
								})}
								<td
									style={{
										verticalAlign: "middle",
										textAlign: "center",
										backgroundColor: renderColor(rata2 / item.users.length || 0),
										border: "2px solid black",
									}}
								>
									<b>Rata-rata</b>
									<br />
									<b>{(rata2 / item.users.length || 0).toFixed(2)}</b>
								</td>
							</tr>
						);
					})}
				</tbody>
				{/* <thead>
					<tr>
						<th colSpan={2}>Kriteria Penilaian</th>
					</tr>
				</thead> */}
				<tbody>
					<tr>
						<td>
							<b>Kritik & Saran</b>
						</td>
					</tr>
					{criticismAndSuggestions.map((item: any) => (
						<tr>
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
