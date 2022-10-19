import TabV4 from "molecules/TabV4";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "./styles";

const History = dynamic(() => import("./History"));
const Detail = dynamic(() => import("./Detail"));

const tabText = ["Detail", "History"];

const renderContent = (type: string) => {
	if (type === "Detail") {
		return <Detail />;
	} else if (type === "History") {
		return <History />;
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
