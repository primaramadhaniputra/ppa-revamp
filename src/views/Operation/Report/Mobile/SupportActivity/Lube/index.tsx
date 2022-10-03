import TabV4 from "molecules/TabV4";
import React, { useState } from "react";
import Detail from "./Detail";
import { Wrapper } from "./styles";

const tabText = ["Detail", "History"];

const renderContent = (type: string) => {
	if (type === "Detail") {
		return <Detail />;
	}
};

export default function Lube() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV4 tabText={tabText} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabText[activeTab])}
		</Wrapper>
	);
}
