import { ISelectItem } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { getReportCriteriaByCriteriaId } from "services/survey";
import { ISurveyReportCriteria } from "utils/interfaces";
import CardSite from "./CardSite";
import FilterPeriod from "./FilterPeriode";
import PointDescription from "./PointDescription";

interface IProps {
	periode: ISelectItem[];
}

const Survey = ({ periode }: IProps) => {
	const [periodeId, setPeriodeId] = useState(periode[0].values);
	const [reportCriteria, setReportCriteria] = useState<ISurveyReportCriteria[]>([]);

	const handleGetReportCriteria = async () => {
		try {
			const response = await getReportCriteriaByCriteriaId({
				path: `${periodeId}`,
			});
			setReportCriteria(response.data.data.reports);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		handleGetReportCriteria();
	}, [periodeId]);

	useEffect(() => {
		if (periode.length) {
			Cookies.set("periode", periode[0].label);
		}
	}, []);

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Survey Kepuasan Pelanggan
			</TitlePage>
			<FilterPeriod
				periode={periode}
				setPeriodeId={setPeriodeId}
				periodeId={periodeId}
				reportCriteria={reportCriteria}
			/>
			<CardSite reportCriteria={reportCriteria} periodeId={periodeId} />
			<PointDescription />
		</>
	);
};

export default Survey;
