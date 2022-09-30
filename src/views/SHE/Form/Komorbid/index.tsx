import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "../styles";
import Monitoring from "./Monitoring";
import Riwayat from "./Riwayat";

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
