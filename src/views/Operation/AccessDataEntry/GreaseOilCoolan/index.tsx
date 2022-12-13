import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const tabTitle = ["Input Mechanic", "Gocool Revision"];

const InputMechanic = dynamic(() => import("./InputMechanic"), {
	ssr: false,
});
const GocoolRevision = dynamic(() => import("./GocoolRevision"), {
	ssr: false,
});

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <InputMechanic />;
	} else {
		return <GocoolRevision />;
	}
};

export default function GreaseOilCoolan() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
