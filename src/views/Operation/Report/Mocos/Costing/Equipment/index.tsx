import { Grid } from "@hudoro/neron";
import TabV4 from "molecules/TabV4";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const tabs = ["Detail", "ABC"];

const Detail = dynamic(() => import("./Detail"), {
	ssr: false,
});
const ABC = dynamic(() => import("./ABC"), {
	ssr: false,
});

const renderContent = (type: string) => {
	if (type === "Detail") {
		return <Detail />;
	} else if (type === "ABC") {
		return <ABC />;
	}
};

export default function Equipment() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<Grid style={{ margin: "20px 0" }}>
				<TabV4 tabText={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			</Grid>
			{renderContent(tabs[activeTab])}
		</>
	);
}
