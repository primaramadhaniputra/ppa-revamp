import { Grid } from "@hudoro/neron";
import TabV4 from "molecules/TabV4";
import React, { useState } from "react";
import Fault from "./Fault";
import History from "./History";
import Performance from "./Performance";

const tabs = ["Performance", "Fault", "History"];

const renderContent = (type: number) => {
	if (type === 0) {
		return <Performance />;
	} else if (type === 1) {
		return <Fault />;
	} else if (type === 2) {
		return <History />;
	}
};

const Hauler = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			<Grid style={{ margin: "20px 0 10px" }}>
				<TabV4 tabText={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			</Grid>
			{renderContent(activeTab)}
		</>
	);
};

export default Hauler;
