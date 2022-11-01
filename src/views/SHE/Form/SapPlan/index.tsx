import TitleText from "atoms/TitleText";
import React from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import Table from "./Table";

export default function SapPlan() {
	return (
		<>
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText>Komorbid</TitleText>
			</LayoutTable>
			<Table />
		</>
	);
}
