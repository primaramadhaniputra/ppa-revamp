import React from "react";
import DateText from "atoms/DateText";
import TopFilter from "src/components/organism/TopFilter";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";

export default function Distance() {
	return (
		<>
			<LayoutTable>
				<TitleText>Distance</TitleText>
				<DateText />
			</LayoutTable>
			<TopFilter />
			<LayoutTable>'</LayoutTable>
		</>
	);
}
