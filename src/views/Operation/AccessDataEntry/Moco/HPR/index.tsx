import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Master = dynamic(() => import("./Master"), {
	ssr: false,
});

const renderContent = (type: string) => {
	if (type === "Master") {
		return <Master />;
	}
};

export default function HPR() {
	const [activeTab, setActiveTab] = useState(0);
	const tabTitle = ["Master", "Form"];

	return (
		<>
			<TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabTitle[activeTab])}
		</>
	);
}
