import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import { useState } from "react";

const tabs = [
	"Payload",
	"Empty Stop",
	"Loading Time",
	"Speed",
	"Loaded Speed",
	"Empty Speed",
	"All",
	"All By Loader",
];

const DynamicPayloadView = dynamic(() => import("./Payload"), { ssr: false });
const DynamicVHMSView = dynamic(() => import("./VHMS"), { ssr: false });
const All = dynamic(() => import("./All"), { ssr: false });
const AllByLoader = dynamic(() => import("./AllByLoader"), { ssr: false });

const renderContent = (type: number) => {
	if (type === 0) {
		return <DynamicPayloadView />;
	} else if (type === 1) {
		return <DynamicVHMSView vhmsType="empty-stop" />;
	} else if (type === 2) {
		return <DynamicVHMSView vhmsType="loading-time" />;
	} else if (type === 3) {
		return <DynamicVHMSView vhmsType="speed" />;
	} else if (type === 4) {
		return <DynamicVHMSView vhmsType="loaded-speed" />;
	} else if (type === 5) {
		return <DynamicVHMSView vhmsType="empty-speed" />;
	} else if (type === 6) {
		return <All />;
	} else if (type === 7) {
		return <AllByLoader />;
	}
};

export default function Production() {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
