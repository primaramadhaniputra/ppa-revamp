import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Hm = dynamic(() => import("./Hm"), { ssr: false });
const Material = dynamic(() => import("./Material"), { ssr: false });
const Operator = dynamic(() => import("./Operator"), { ssr: false });

const tabs = ["By HM", "By Material", "By Operator", "By Operator(Beta)"];

const renderContent = (type: string) => {
	if (type === "By HM") {
		return <Hm />;
	} else if (type === "By Material") {
		return <Material />;
	} else if (type === "By Operator") {
		return <Operator />;
	} else if (type === "By Operator(Beta)") {
		return <Operator />;
	}
};

export default function Productivity() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabs[activeTab])}
		</>
	);
}
