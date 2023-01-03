import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";

import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import MigrateTable from "src/components/organism/MigrateTable";

interface ITable {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["ROL"]: "ROL",
		["DEPT"]: "ENG",
		["PERUSAHAAN"]: "AMM",
		["MASA SIMPER"]: "30-09-2022",
		["MASA MINEPERMIT"]: "30-09-2023",
		["MASA MCU"]: "20-03-2023",
		["EXP SIMPER"]: "-2 HARI",
		["EXP PERMIT"]: "-120 HARI",
		["EXP MCU"]: "-120 HARI",
	};
});

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const columnHelper = createColumnHelper<ITable>()

export default function ShowDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	)

	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="LIST SIMPER AKTIF < 30 HARI DEPT ENG"
		>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</LayoutOverlayData>
	);
}
