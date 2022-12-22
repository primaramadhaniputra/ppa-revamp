import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper, WrapperTitle, TitleText } from "views/Administration/styles";

const Assessment = dynamic(() => import("./Assessment"), {
	ssr: false,
});
const HistoryGradeAndPost = dynamic(() => import("./HistoryGradeAndPost"), {
	ssr: false,
});
const Personel = dynamic(() => import("./Personel"), {
	ssr: false,
});
const EmployeeNonAktif = dynamic(() => import("./EmployeeNonAktif"), {
	ssr: false,
});

const tabTitle = [
	"PERSONEL",
	"AGREEMENT",
	"ASSESSMENT",
	"EMPLOYEE NON-ACTIVE",
	"HISTORY GRADE AND POST",
];

const renderContent = (type: string) => {
	if (type === "HISTORY GRADE AND POST") {
		return <HistoryGradeAndPost />;
	} else if (type === "PERSONEL") {
		return <Personel />;
	} else if (type === "EMPLOYEE NON-ACTIVE") {
		return <EmployeeNonAktif />;
	}
};

export default function Manpower() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === 2 ? (
				<Assessment />
			) : (
				<WrapperTitle>
					<TitleText>{tabTitle[activeTab]}</TitleText>
				</WrapperTitle>
			)}
			{renderContent(tabTitle[activeTab])}
		</Wrapper>
	);
}
