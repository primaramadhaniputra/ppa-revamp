import TitlePage from "atoms/TitlePage";
import { useEffect, useState } from "react";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";
import Cookies from "js-cookie";
import { Grid } from "@hudoro/neron";
import FilterPeriod from "./FilterPeriode";
import KepuasanPelanggan from "./KepuasanPelanggan";
import ManajemenRisiko from "./ManajemenRisiko";
// import { ButtonExport } from "./ManajemenRisiko/styles";

const renderContent = (periodeId: string, periodeName: string) => {
	if (periodeName === "Manajemen Risiko") {
		return <ManajemenRisiko />;
	}
	return <KepuasanPelanggan periodeId={periodeId} />;
};

const Survey = () => {
	const periode = useSurveyPeriodeValue();
	const cookiePeriodeId = Cookies.get("periodeId");
	const [periodeId, setPeriodeId] = useState<string>();
	const periodeName = periode.find((item) => item.id === periodeId)?.label;
	useEffect(() => {
		if (cookiePeriodeId) {
			setPeriodeId(cookiePeriodeId);
		}
	}, []);
	return (
		<>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
				gap={20}
				style={{ marginBottom: "50px" }}
			>
				<TitlePage type="h3" styles={{ fontSize: "22px" }}>
					Survey Kepuasan Pelanggan
				</TitlePage>
				<Grid container alignItems="center" gap={10}>
					<FilterPeriod setPeriodeId={setPeriodeId} />
					{/* <ButtonExport>Create Survey</ButtonExport> */}
				</Grid>
			</Grid>
			{periodeId && renderContent(periodeId, periodeName as string)}
		</>
	);
};

export default Survey;
