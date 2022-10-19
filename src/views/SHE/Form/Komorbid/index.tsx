import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "../styles";

const Riwayat = dynamic(() => import("./Riwayat"));
const Monitoring = dynamic(() => import("./Monitoring"));

const tabTitle = ["Monitoring", "Riwayat"];

export default function Komorbid() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<WrapperTitle style={{ marginBottom: "10px" }}>
				<TitleText>Komorbid</TitleText>
			</WrapperTitle>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === 0 ? <Monitoring /> : <Riwayat />}
		</>
	);
}
