import React from "react";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTitle } from "../../../../styles";

export default function FuelCost() {
	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Operation Wet Cost</TitleText>
			</WrapperTitle>
			<TopFilter />
		</>
	);
}
