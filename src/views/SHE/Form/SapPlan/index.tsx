import React from "react";
import { TitleText, WrapperTitle } from "../styles";
import Table from "./Table";

export default function SapPlan() {
	return (
		<>
			<WrapperTitle>
				<TitleText>SAP Plan</TitleText>
			</WrapperTitle>
			<Table />
		</>
	);
}
