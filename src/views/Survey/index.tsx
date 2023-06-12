import TitlePage from "atoms/TitlePage";
import { useState } from "react";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";
import FilterPeriod from "./FilterPeriode";
import KepuasanPelanggan from "./KepuasanPelanggan";
import ManajemenRisiko from "./ManajemenRisiko";

const renderContent = (periodeId: string, periodeName: string) => {
	if (periodeName === "Manajemen Risiko") {
		return <ManajemenRisiko />;
	} else {
		return <KepuasanPelanggan periodeId={periodeId} />;
	}
};

const Survey = () => {
	const periode = useSurveyPeriodeValue();
	const [periodeId, setPeriodeId] = useState();
	const periodeName = periode.find((item) => item.id === periodeId)?.label;
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
