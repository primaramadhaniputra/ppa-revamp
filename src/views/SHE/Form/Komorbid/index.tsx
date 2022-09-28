import React, { useState } from "react";
import { TitleText, WrapperTitle } from "../styles";
import Monitoring from "./Monitoring";
import Riwayat from "./Riwayat";
import { TabsWrapper, TabText } from "./styles";

const tabTitle = ["Monitoring", "Riwayat"];

export default function Komorbid() {
	const [activeTab, setActiveTab] = useState(0);

	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<>
			<WrapperTitle>
				<TitleText>Komorbid</TitleText>
			</WrapperTitle>
			<TabsWrapper>
				{tabTitle.map((item, index) => (
					<TabText
						key={index}
						activeTab={activeTab === index ? true : false}
						onClick={() => handleActiveTab(index)}
					>
						{item}
					</TabText>
				))}
			</TabsWrapper>
			{activeTab === 0 ? <Monitoring /> : <Riwayat />}
		</>
	);
}
