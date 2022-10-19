import { Grid } from "@hudoro/neron";
import TabV4 from "molecules/TabV4";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const tabs = ["Detail", "ABFC", "FUEL COST"];

const Detail = dynamic(() => import("./Detail"), {
	ssr: false,
});
const Abfc = dynamic(() => import("./Abfc"), {
	ssr: false,
});
const FuelCost = dynamic(() => import("./FuelCost"), {
	ssr: false,
});

const renderContent = (type: string) => {
	if (type === "Detail") {
		return <Detail />;
	} else if (type === "ABFC") {
		return <Abfc />;
	} else if (type === "FUEL COST") {
		return <FuelCost />;
	}
};

export default function Fuel() {
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
