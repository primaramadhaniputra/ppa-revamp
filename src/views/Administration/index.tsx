import React from "react";
import dynamic from "next/dynamic";

interface IProps {
	id: string;
}

const GAView = dynamic(() => import("./GA"), { ssr: false });
const HCView = dynamic(() => import("./HC"), { ssr: false });
const LegalView = dynamic(() => import("./Legal"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "hc") {
		return <HCView />;
	} else if (type === "ga") {
		return <GAView />;
	} else {
		return <LegalView />;
	}
};

export default function Legal({ id }: IProps) {
	return <>{renderContent(id)}</>;
}
