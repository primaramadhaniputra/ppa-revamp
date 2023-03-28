import { ISelectItem, Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import TabV1 from "molecules/TabV1";
// import dynamic from "next/dynamic";
import { useState } from "react";
import { useWindowSize } from "utils/functions";
// import BaseControl from "./BaseControl";
import Device from "./Device";
// import Mobile from "./Mobile";
// import Mocos from "./Mocos";
import { ArrowDown, SelectContainer } from "./styles";

// const Device = dynamic(() => import("./Device"), { ssr: false });
// const CostParameter = dynamic(() => import("./CostParameter"), { ssr: false });
// , "Mobile", "Moco", "Base Control", "Cost Parameter"
const tabsData = ["Device"];

const selectItems = [
	{ id: 1, values: "Device", label: "Device" },
	// { id: 2, values: "Mobile", label: "Mobile" },
	// { id: 3, values: "Moco", label: "Moco" },
	// { id: 4, values: "Base Control", label: "Base Control" },
	// { id: 5, values: "Cost Parameter", label: "Cost Parameter" },
];

function renderContent(queryName: string) {
	console.log(queryName);
	// if (queryName === "Device") {
	return <Device />;
	// } else if (queryName === "Mobile") {
	// 	return <Mobile />;
	// } else if (queryName === "Moco") {
	// 	return <Mocos />;
	// } else if (queryName === "Base Control") {
	// 	return <BaseControl />;
	// } else {
	// 	return <CostParameter />;
	// }
}

export default function Operation() {
	const width = useWindowSize();
	const [selectedItem, setSelectedItem] = useState("Device");
	const handleSelect = (e: ISelectItem | ISelectItem[]) => {
		setSelectedItem(e.values);
	};

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Operation / Report
			</TitlePage>
			{width.width > 700 ? (
				<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			) : (
				<SelectContainer style={{ margin: "15px 0" }}>
					<label>Menu</label>
					<Select
						items={selectItems}
						defaultValue={{ id: 1, values: selectedItem, label: selectedItem }}
						onChange={handleSelect as any}
					/>
					<ArrowDown></ArrowDown>
				</SelectContainer>
			)}
			{renderContent(selectedItem)}
		</>
	);
}
