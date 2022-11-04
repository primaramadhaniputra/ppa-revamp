import { Grid } from "@hudoro/neron";
import React, { useState } from "react";
import QuestionResponse from "./QuestionResponse";
import { TabContainer, TabText } from "../styles";
import dynamic from "next/dynamic";
const tabsData = ["Location", "Question Response"];

const Map = dynamic(() => import("./Map"), {
	ssr: false,
});

const TabsChanges = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleChangeActiveTab = (id: number) => {
		setActiveTab(id);
	};

	return (
		<Grid style={{ marginTop: "50px" }}>
			<TabContainer>
				{tabsData.map((item, index) => (
					<TabText
						key={index}
						style={{
							backgroundColor: activeTab === index ? "rgba(0,0,0,.05)" : "",
							border: activeTab === index ? "1px solid rgba(0,0,0,.05)" : "none",
							borderRadius: activeTab === index ? "5px" : "none",
						}}
						onClick={() => handleChangeActiveTab(index)}
					>
						{item}
					</TabText>
				))}
			</TabContainer>
			{activeTab === 0 ? <Map /> : <QuestionResponse />}
		</Grid>
	);
};

export default TabsChanges;
