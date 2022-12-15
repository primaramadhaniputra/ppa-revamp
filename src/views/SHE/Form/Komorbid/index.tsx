import TitleText from "atoms/TitleText";
import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import LayoutTable from "src/components/layouts/LayoutTable";

const Riwayat = dynamic(() => import("./Riwayat"), { ssr: false });
const Monitoring = dynamic(() => import("./Monitoring"), { ssr: false });

const tabTitle = ["Monitoring", "Riwayat"];

export default function Komorbid() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<LayoutTable>
				<TitleText>Komorbid</TitleText>
			</LayoutTable>
			{activeTab === 0 ? <Monitoring /> : <Riwayat />}
		</>
	);
}
