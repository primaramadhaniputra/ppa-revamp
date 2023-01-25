import TitlePage from "atoms/TitlePage";
import React, { useState } from "react";
import CardSite from "./CardSite";
import FilterPeriod from "./FilterPeriode";
import PointDescription from "./PointDescription";

const Survey = () => {
	const [years, setYears] = useState(2020);
	const [semester, setSemester] = useState(1);
	console.log("years", years);
	console.log("semester", semester);
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Survey Kepuasan Pelanggan
			</TitlePage>
			<FilterPeriod setYears={setYears} setSemester={setSemester} />
			<CardSite />
			<PointDescription />
		</>
	);
};

export default Survey;
