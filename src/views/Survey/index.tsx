import TitlePage from "atoms/TitlePage";
import { useEffect, useState } from "react";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";
import FilterPeriod from "./FilterPeriode";
import KepuasanPelanggan from "./KepuasanPelanggan";
import ManajemenRisiko from "./ManajemenRisiko";
import Cookies from "js-cookie";

const renderContent = (periodeId: string, periodeName: string) => {
	if (periodeName === "Manajemen Risiko") {
		return <ManajemenRisiko />;
	} else {
		return <KepuasanPelanggan periodeId={periodeId} />;
	}
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
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Survey Kepuasan Pelanggan
			</TitlePage>
			<FilterPeriod setPeriodeId={setPeriodeId} />
			{periodeId && renderContent(periodeId, periodeName as string)}
		</>
	);
};

export default Survey;
