import React from "react";
import { TitleText, WrapperTable, WrapperTitle } from "../styles";
import BottomTable from "./BottomTable";
import TopTable from "./TopTable";

export default function Licence() {
	return (
		<>
			<WrapperTitle>
				<TitleText>Monitoring Licence</TitleText>
			</WrapperTitle>
			<WrapperTable style={{ marginTop: "20px" }}>
				<TopTable />
			</WrapperTable>
			<WrapperTable style={{ marginTop: "20px" }}>
				<BottomTable />
			</WrapperTable>
		</>
	);
}
