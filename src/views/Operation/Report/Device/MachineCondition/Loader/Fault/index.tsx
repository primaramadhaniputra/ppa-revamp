import TabV5 from "molecules/TabV5";
import React, { useState } from "react";
import AllCode from "./AllCode";

const tabsData = ["ALL CODE"];

const Fault = () => {
	const [selectedItem, setSelectedItem] = useState("ALL CODE");
	return (
		<>
			<TabV5 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			<AllCode />
		</>
	);
};

export default Fault;
