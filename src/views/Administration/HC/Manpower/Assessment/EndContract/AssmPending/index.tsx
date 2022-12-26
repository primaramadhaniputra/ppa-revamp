import { Grid, Select } from "@hudoro/neron";
import React, { useState } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import TableWaitingAtasanLansung from "./TableWaitingAtasanLansung";
import TableWaitingScore from "./TableWaitingScore";

interface IProps {
	isShowAssmPending: boolean;
	setIsShowAssmPending: React.Dispatch<React.SetStateAction<boolean>>;
	formAssmPendingPosition: number;
}

const dataSelect = [
	{
		id: "0",
		label: "Waiting Atasan Lansung",
		values: "Waiting Atasan Lansung",
	},
	{
		id: "1",
		label: "Waiting Score",
		values: "Waiting Score",
	},
];

const renderContent = (type: string) => {
	if (type === "Waiting Atasan Lansung") {
		return <TableWaitingAtasanLansung />;
	} else {
		return <TableWaitingScore />;
	}
};

export default function AssmPending({
	isShowAssmPending,
	setIsShowAssmPending,
	formAssmPendingPosition,
}: IProps) {
	const [ActiveTab, setActiveTab] = useState("Waiting Atasan Lansung");

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowAssmPending}
				setIsShowDetail={setIsShowAssmPending}
				formPosition={formAssmPendingPosition}
				title="Assm Pending"
			>
				<Grid style={{ maxWidth: "250px", margin: "0px auto 30px" }}>
					<Select
						items={dataSelect}
						defaultValue={dataSelect[0]}
						onChange={(e) => setActiveTab(e?.values)}
					/>
				</Grid>
				{renderContent(ActiveTab)}
			</LayoutOverlayData>
		</>
	);
}
