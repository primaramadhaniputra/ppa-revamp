import TitleText from "atoms/TitleText";
import React from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import BottomTable from "./BottomTable";
import TopTable from "./TopTable";

export default function Licence() {
	return (
		<>
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText> Monitoring Licence</TitleText>
			</LayoutTable>
			<LayoutTable>
				<TopTable />
			</LayoutTable>
			<LayoutTable>
				<BottomTable />
			</LayoutTable>
		</>
	);
}
