import TitlePage from "atoms/TitlePage";
import React from "react";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";
import CardDetail from "./CardDetail";
import StatusCard from "./StatusCard";

interface IProps {
	dataReport: ISurveyReportCriteriaDetail[];
}

const SurveyDetail = ({ dataReport }: IProps) => {
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Detail Laporan Survey
			</TitlePage>
			<StatusCard />
			<CardDetail dataReport={dataReport} />
		</>
	);
};

export default SurveyDetail;
