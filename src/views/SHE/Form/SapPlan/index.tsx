import React from "react";
import { TitleText, WrapperTable, WrapperTitle } from "./styles";
import Table from "./Table";

export default function SapPlan() {
	return (
		<>
			<WrapperTitle>
				<TitleText>SAP Plan</TitleText>
			</WrapperTitle>
			<WrapperTable>
				<Table />
			</WrapperTable>
		</>
	);
}
