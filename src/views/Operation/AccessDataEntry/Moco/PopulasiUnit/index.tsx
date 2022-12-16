import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Daily = dynamic(() => import("./Daily"), {
	ssr: false,
});
const Current = dynamic(() => import("./Current"), {
	ssr: false,
});

const renderContet = (type: string) => {
	if (type === "Daily") {
		return <Daily />;
	} else {
		return <Current />;
	}
};

export default function PopulasiUnit() {
	const [activeTab, setActiveTab] = useState(0);
	const tabTitle = ["Current", "Daily"];

	return (
		<>
			<TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContet(tabTitle[activeTab])}
		</>
	);
}
