import React from "react";
import TitlePage from "atoms/TitlePage";
import dynamic from "next/dynamic";

interface IProps {
	pageTitle: string;
	type: string;
}

const AbsMachine = dynamic(() => import("./AbsMachine"), { ssr: false });
const AccessControl = dynamic(() => import("./AccessControl"), { ssr: false });
const Database = dynamic(() => import("./Database"), { ssr: false });
const DeviceMonitoring = dynamic(() => import("./DeviceMonitoring"), { ssr: false });
const Events = dynamic(() => import("./Events"), { ssr: false });
const Survey = dynamic(() => import("./Survey"), { ssr: false });
const VHMSDownload = dynamic(() => import("./VHMSDownload"), { ssr: false });
const AppVersionControl = dynamic(() => import("./AppVersionControl"), { ssr: false });
const UserFeedback = dynamic(() => import("./UserFeedback"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "vhms_download") {
		return <VHMSDownload />;
	} else if (type === "database") {
		return <Database />;
	} else if (type === "survey") {
		return <Survey />;
	} else if (type === "app_version_control") {
		return <AppVersionControl />;
	} else if (type === "user_feedback") {
		return <UserFeedback />;
	} else if (type === "abs_machine") {
		return <AbsMachine />;
	} else if (type === "access_control") {
		return <AccessControl />;
	} else if (type === "events") {
		return <Events />;
	} else {
		return <DeviceMonitoring />;
	}
};

export default function Sytem({ pageTitle, type }: IProps) {
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				system / {pageTitle}
			</TitlePage>
			{renderContent(type)}
		</>
	);
}
