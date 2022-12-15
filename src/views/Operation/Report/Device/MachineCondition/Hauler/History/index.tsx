import TabV1 from "molecules/TabV1";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const tabsData = ["KEY ON", "SMR"];

const KeyOn = dynamic(() => import("./KeyOn"), { ssr: false });

const Smr = dynamic(() => import("./Smr"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "KEY ON") {
		return <KeyOn />;
	} else if (type === "SMR") {
		return <Smr />;
	}
};

const History = () => {
	const [selectedItem, setSelectedItem] = useState("KEY ON");
	return (
		<>
			<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			{renderContent(selectedItem)}
		</>
	);
};

export default History;
