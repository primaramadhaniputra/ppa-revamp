import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Cookies from "js-cookie";
import Link from "next/link";
import CardDetail from "./CardDetail";
import StatusCard from "./StatusCard";
import { PeriodeText } from "./styles";
import TableManajemenRisiko from "./TableManajemenRisiko";

const SurveyDetail = () => {
	const site = Cookies.get("site");
	const periode = Cookies.get("periode");
	const parentCompany = Cookies.get("parentCompany");

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
			{periode !== "Manajemen Risiko" && <StatusCard />}
			{periode === "Manajemen Risiko" ? <TableManajemenRisiko /> : <CardDetail />}
		</>
	);
};

export default SurveyDetail;
