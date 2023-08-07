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
	const router = useRouter()
	const tableRef = useRef(null);

	const [assessmentCriteria, setAssessmentCriteria] = useState([])
	const [criticismAndSuggestions, setCriticismAndSuggestions] = useState([])

	const handleGetReportAllSite = async () => {
		try {
			const slug = (router.query.slug as string[])?.join('/')
			const response = await getReportSite({
				path: `/${slug}`
			});
			setCriticismAndSuggestions(response.data.data.criticismAndSuggestions)
			setAssessmentCriteria(response.data.data.assessmentCriteria)
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
			<Grid container justifyContent="flex-end" style={{ marginTop: '20px' }}>
				<Button title="Download Excel" onClick={onDownload} />
			</Grid>
			<table hidden ref={tableRef}>
				<thead>
					<tr>
						<th >
							ppa
						</th>
						<th colSpan={10}>
							FULL SERVICE MINING CONTRACTOR
							PT. PUTRA PERKASA ABADI
							OFFICE: GEDUNG OFFICE 8 LT. 8 , JL. SENOPATI RAYA NO.8 B RT.01, RW.02
							SENAYAN  KEBAYORAN BARU - JAKARTA  TEL: 021-57903456 (7)   FAX: 021-57903458
						</th>
					</tr>
					<tr>
						<th colSpan={11} style={{ background: 'black', color: "white" }}>
							LAPORAN REKAPITULASI EVALUASI SURVEY KEPUASAN PELANGGAN TAHUN 2023 SEMESTER 1 PPA SITE BUKIT ASAM
						</th>
					</tr>
					<tr>
						<th colSpan={11} >
							Score :
						</th>
					</tr>
					<tr>
						<th style={{ background: 'red', color: "black" }}>
							1 sampai 5
						</th>
						<th colSpan={10}>
							need improvement(kurang)
						</th>
					</tr>
					<tr >
						<th style={{ background: 'yellow', color: "black" }}>
							6 sampai 7
						</th>
						<th colSpan={10}>
							enough (Cukup)
						</th>
					</tr>
					<tr>
						<th style={{ background: 'green', color: "black" }}>
							8 sampai 9
						</th>
						<th colSpan={10}>
							good (bagus)
						</th>
					</tr>
					<tr>
						<th style={{ background: 'purple', color: "black" }}>
							10
						</th>
						<th colSpan={10}>
							excellent (bagus sekali)
						</th>
					</tr>
				</thead >
				<thead>
					<tr>
						<th>Kriteria Penilaian</th>
					</tr>
				</thead>
				<tbody>
					{assessmentCriteria.map((item: any) => <tr>
						<td>{item.name}</td>
						{item.users.map((data: any) => <td>
							{data.name}({data.positionName}) - {data.averageValue}
						</td>)}
					</tr>)}
					<tr>
						<td><b>Kritik & Saran</b></td>
					</tr>
					{/* <tr> */}
					{
						criticismAndSuggestions.map((item: any) => <tr>
							<td>{item.fullName} - {item.positionName}</td>
							<td>{item.value}</td>
						</tr>)
					}
					{/* </tr> */}
				</tbody>
			</table>
			<StatusCard />
			<CardDetail />
		</>
	);
};

export default SurveyDetail;
