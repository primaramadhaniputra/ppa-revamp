import Loading from "atoms/Loading";
import TitlePage from "atoms/TitlePage";
import React, { useState } from "react";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";
import { getReportCriteriaByCriteriaId } from "services/survey";
import { useAsync } from "utils/customHooks";
import { IPromiseResult } from "utils/interfaces";
import CardSite from "./CardSite";
import FilterPeriod from "./FilterPeriode";
import PointDescription from "./PointDescription";

const Survey = () => {
	const periode = useSurveyPeriodeValue();
	const [periodeId, setPeriodeId] = useState(periode[0].values);

	const { loading, response } = useAsync(
		() =>
			getReportCriteriaByCriteriaId({
				path: `${periodeId}`,
			}),
		periodeId,
		true,
	);

	if (loading || !response) {
		return <Loading />;
	}
	const dataReport = (response as IPromiseResult).data.data.reports;
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Survey Kepuasan Pelanggan
			</TitlePage>
			<FilterPeriod setPeriodeId={setPeriodeId} periodeId={periodeId} reportCriteria={dataReport} />
			<CardSite reportCriteria={dataReport} periodeId={periodeId} />
			<PointDescription />
		</>
	);
};

export default Survey;
