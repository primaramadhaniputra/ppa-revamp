import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "views/Administration/styles";

const tabTitle = [
	"HOLIDAY",
	"ATTENDANCE INDEX",
	// "ATTENDANCE INDEX(BETA)",
	"PREMI INDEX",
	"INDIVIDUAL INDEX",
	"PREMI",
	"OVERTIME",
	"DAR",
];

const Holiday = dynamic(() => import("./Holiday"), { ssr: false });
const AttendanceIndex = dynamic(() => import("./AttendanceIndex"), { ssr: false });
const PremiIndex = dynamic(() => import("./PremiIndex"), { ssr: false });
const IndividualIndex = dynamic(() => import("./IndividualIndex"), { ssr: false });
const DAR = dynamic(() => import("./DAR"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "HOLIDAY") {
		return <Holiday />;
	} else if (type === "ATTENDANCE INDEX") {
		return <AttendanceIndex />;
	} else if (type === "PREMI INDEX") {
		return <PremiIndex />;
	} else if (type === "INDIVIDUAL INDEX") {
		return <IndividualIndex />;
	} else if (type === "PREMI") {
		return <IndividualIndex />;
	} else if (type === "DAR") {
		return <DAR />;
	}
};

export default function TimeManagement() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabTitle[activeTab])}
		</Wrapper>
	);
}
