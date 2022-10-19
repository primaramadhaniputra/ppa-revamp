import { Grid } from "@hudoro/neron";
import TabV4 from "molecules/TabV4";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Performance = dynamic(() => import("./Performance"), {
	ssr: false,
});
const Fault = dynamic(() => import("./Fault"), {
	ssr: false,
});

const tabs = ["Performance", "Fault"];

const renderContent = (type: number) => {
	if (type === 0) {
		return <Performance />;
	} else if (type === 1) {
		return <Fault />;
	}
};

const Loader = () => {
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

export default Loader;
