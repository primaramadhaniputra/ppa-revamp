import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const P2H = dynamic(() => import("./P2H"), { ssr: false });
const Sap = dynamic(() => import("./Sap"), { ssr: false });
const SayaPeduli = dynamic(() => import("./SayaPeduli"), { ssr: false });
const FitToWork = dynamic(() => import("./FitToWork"), { ssr: false });

const tabTitle = ["P2H", "Saya Peduli", "SAP", "Fit To Work"];

const renderContent = (type: string) => {
	if (type === "P2H") {
		return <P2H />;
	} else if (type === "Saya Peduli") {
		return <SayaPeduli />;
	} else if (type === "SAP") {
		return <Sap />;
	} else if (type === "Fit To Work") {
		return <FitToWork />;
	}
};

export default function Mobile() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabTitle[activeTab])}
		</>
	);
}
