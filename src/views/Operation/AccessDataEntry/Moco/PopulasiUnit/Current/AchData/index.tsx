import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	isShowAch: boolean;
	setIsShowAch: React.Dispatch<React.SetStateAction<boolean>>;
	achPosition: number;
}
const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No"]: "",
		["Data"]: "",
		["Ach"]: "",
		["Null"]: "",
		["Persen"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function AchData({ isShowAch, setIsShowAch, achPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowAch}
				setIsShowDetail={setIsShowAch}
				formPosition={achPosition}
				title="DETAIL ACHIEVEMENT DATA UNIT"
			>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutOverlayData>
		</>
	);
}
