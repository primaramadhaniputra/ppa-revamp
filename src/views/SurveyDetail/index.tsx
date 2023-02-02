import { Grid, Text } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Cookies from "js-cookie";
import React from "react";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";
import CardDetail from "./CardDetail";
import StatusCard from "./StatusCard";

interface IProps {
	dataReport: ISurveyReportCriteriaDetail[];
}

const SurveyDetail = ({ dataReport }: IProps) => {
	const site = Cookies.get("site");
	const periode = Cookies.get("periode");
	return (
		<>
			<Grid container gap={10} alignItems="center" justifyContent="space-between">
				<TitlePage type="h3" styles={{ fontSize: "22px" }}>
					Detail Laporan Survey
				</TitlePage>
				<Grid container flexDirection="column" gap={3}>
					<Text variant="h4" style={{ fontSize: "14px" }}>
						{site}
					</Text>
					<Text variant="h4" style={{ fontSize: "14px" }}>
						{" "}
						periode : {periode}
					</Text>
				</Grid>
			</Grid>
			<StatusCard />
			<CardDetail dataReport={dataReport} />
		</>
	);
};

export default SurveyDetail;
