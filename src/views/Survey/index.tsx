import { ISelectItem } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
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
			setReportCriteria(response.data.data);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		handleGetReportCriteria();
	}, [periodeId]);

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Survey Kepuasan Pelanggan
			</TitlePage>
			<FilterPeriod periode={periode} setPeriodeId={setPeriodeId} />
			<CardSite reportCriteria={reportCriteria} />
			<PointDescription />
		</>
	);
};

export default Survey;
