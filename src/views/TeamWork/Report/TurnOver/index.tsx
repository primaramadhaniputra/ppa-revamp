import React from "react";
import FilterLayouts from "src/components/layouts/FilterLayouts";
import { TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import { ItemContainer } from "./styles";
import TopFilter from "./TopFilter";

export default function TurnOver() {
	return (
		<Wrapper>
			<WrapperTitle>
				<TitleText> Turn Over</TitleText>
			</WrapperTitle>
			<WrapperTable>
				<FilterLayouts>
					<TopFilter />
				</FilterLayouts>
				<ItemContainer>
					<LeftItem />
					<RightItem />
				</ItemContainer>
			</WrapperTable>
		</Wrapper>
	);
}
