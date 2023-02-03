import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Cookies from "js-cookie";
import React from "react";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";
import CardDetail from "./CardDetail";
import StatusCard from "./StatusCard";
import { PeriodeText } from "./styles";

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
					Detail Laporan Survey /{" "}
					<span style={{ fontSize: "16px", color: "rgba(170, 180, 198, 1)" }}>{site}</span>
				</TitlePage>
				<PeriodeText>
					Periode : <span style={{ fontWeight: "500" }}>{periode}</span>
				</PeriodeText>
			</Grid>
			<StatusCard />
			<CardDetail dataReport={dataReport} />
		</>
	);
};

export default SurveyDetail;
