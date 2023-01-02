import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import MutationIn from "./MutationIn";
import NewHire from "./NewHire";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NIK KTP"]: "",
		["NAMA"]: "",
		["GENDER"]: "",
		["TTL"]: "",
		["PENDIDIKAN"]: "",
		["NO HP"]: "",
		["DETAIL"]: "",
	};
});

const dataSelect = [
	{
		id: "0",
		label: "New Hire",
		values: "newhire",
	},
	{
		id: "1",
		label: "Mutation In",
		values: "mutationin",
	},
];

export default function IncomingEmployee({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const [activetable, setActivetable] = useState("new hire");

	const handleSetActiveTable = (e: ISelectItem | ISelectItem[] | null) => {
		setActivetable(e?.values);
	};

	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="WAITING LIST EMPLOYEE IN"
			width={1400}
		>
			<Grid style={{ maxWidth: "200px", margin: "auto", marginBottom: "30px" }}>
				<Select items={dataSelect} defaultValue={dataSelect[0]} onChange={handleSetActiveTable} />
			</Grid>
			{activetable === "newhire" ? <NewHire /> : <MutationIn />}
		</LayoutOverlayData>
	);
}
