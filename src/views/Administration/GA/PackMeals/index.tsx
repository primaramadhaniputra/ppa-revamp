import { Grid, Text } from "@hudoro/neron";
import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, Wrapper, WrapperTitle } from "views/Administration/styles";
import { Container, CountContainer } from "./styles";

const tabTitle = ["REQUEST", "REPORT"];

const ReportView = dynamic(() => import("./Report"), { ssr: false });
const RequestView = dynamic(() => import("./Request"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "REPORT") {
		return <ReportView />;
	} else if (type === "REQUEST") {
		return <RequestView />;
	}
};

const dummyCount = ["Minning", "Mess", "Total"];

export default function PackMeals() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<WrapperTitle>
				<TitleText>
					{tabTitle[activeTab] === "REQUEST" ? "Pack Meals Request" : tabTitle[activeTab]}
				</TitleText>
			</WrapperTitle>
			<Container>
				{dummyCount.map((item, index) => (
					<CountContainer key={index}>
						<Text variant="h3" style={{ fontSize: "clamp(1.5rem, 2.5vw, 4rem)" }}>
							2078
						</Text>
						<Text variant="h4" style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)" }}>
							{item}
						</Text>
					</CountContainer>
				))}
			</Container>
			<TopFilter />
			<Grid>{renderContent(tabTitle[activeTab])}</Grid>
		</Wrapper>
	);
}
