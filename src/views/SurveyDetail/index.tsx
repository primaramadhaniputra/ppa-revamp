import TitlePage from "atoms/TitlePage";
import React from "react";
import CardDetail from "./CardDetail";
import StatusCard from "./StatusCard";

interface IProps {
	slug: string;
}

const SurveyDetail = ({ slug }: IProps) => {
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Laporan Survey / {slug}
			</TitlePage>
			<StatusCard />
			<CardDetail />
		</>
	);
};

export default SurveyDetail;
