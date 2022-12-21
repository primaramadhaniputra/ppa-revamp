import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "views/Administration/styles";

const tabTitle = ["WAITING TO CONFIRM", "LEAVING REPORT", "SALDO CUTI", "MONITORING"];

const WaitingToConfirm = dynamic(() => import("./WaitingToConfirm"), { ssr: false });
const LeavingReport = dynamic(() => import("./LeavingReport"), { ssr: false });
const SaldoCuti = dynamic(() => import("./SaldoCuti"), { ssr: false });
const Monitoring = dynamic(() => import("./Monitoring"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "WAITING TO CONFIRM") {
		return <WaitingToConfirm />;
	} else if (type === "LEAVING REPORT") {
		return <LeavingReport />;
	} else if (type === "SALDO CUTI") {
		return <SaldoCuti />;
	} else if (type === "MONITORING") {
		return <Monitoring />;
	}
};

export default function LeavingApplication() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabTitle[activeTab])}
		</Wrapper>
	);
}
