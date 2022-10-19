import { Grid } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Container, StyledText, TabsContainer, TitleText } from "./styles";
import TopFilter from "./TopFilter";

const Chart = dynamic(() => import("./Chart"));
const Detail = dynamic(() => import("./Detail"));

const tabs = ["Chart", "Detail"];

export default function SafetyPerformance() {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<>
			<Container>
				<Grid container flexDirection="column" gap={20} style={{ flex: 1 }}>
					<TitleText>Safety Monitoring</TitleText>
				</Grid>
				<Grid style={{ flex: 1 }}>
					<TopFilter />
				</Grid>
				<TabsContainer>
					{tabs.map((item, index) => (
						<StyledText
							key={index}
							className={index === activeTab ? "active" : ""}
							onClick={() => setActiveTab(index)}
						>
							{item}
						</StyledText>
					))}
				</TabsContainer>
			</Container>
			{activeTab === 1 ? <Detail /> : <Chart />}
		</>
	);
}
