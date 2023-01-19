import TitlePage from "atoms/TitlePage";
import React from "react";
import { CardSite } from "./CardSite";
import PointDescription from "./PointDescription";

const Survey = () => {
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Survey Kepuasan Pelanggan
			</TitlePage>
			<CardSite />
			<PointDescription />
		</>
	);
};

export default Survey;
