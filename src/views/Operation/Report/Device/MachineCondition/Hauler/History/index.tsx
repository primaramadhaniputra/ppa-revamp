import TabV1 from "molecules/TabV1";
import React, { useState } from "react";

const tabsData = ["KEY ON", "SMR"];

const History = () => {
	const [selectedItem, setSelectedItem] = useState("KEY ON");
	return (
		<>
			<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
		</>
	);
};

export default History;
