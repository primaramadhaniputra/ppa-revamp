import React from "react";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import { ItemContainer } from "./styles";
import TopFilter from "src/components/organism/TopFilter";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";

export default function TurnOver() {
	return (
		<>
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText> Turn Over</TitleText>
			</LayoutTable>
			<TopFilter />
			<LayoutTable>
				<ItemContainer>
					<LeftItem />
					<RightItem />
				</ItemContainer>
			</LayoutTable>
		</>
	);
}
