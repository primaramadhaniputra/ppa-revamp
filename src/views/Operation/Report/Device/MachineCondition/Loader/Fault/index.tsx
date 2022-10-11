import TabV1 from "molecules/TabV1";
import React, { useState } from "react";

const tabsData = ["ALL CODE"];

const Fault = () => {
	const [selectedItem, setSelectedItem] = useState("ALL CODE");
	return (
		<>
			<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
		</>
	);
};

export default Fault;
