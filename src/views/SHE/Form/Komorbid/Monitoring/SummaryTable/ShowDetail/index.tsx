import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";

import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import MigrateTable from "src/components/organism/MigrateTable";

interface ITable {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		["ROL"]: "-",
		["DEPT"]: "-",
		["PERUSAHAAN"]: "-",
		["MASA SIMPER"]: "-",
		["MASA MINEPERMIT"]: "-",
		["MASA MCU"]: "-",
		["EXP SIMPER"]: "-",
		["EXP PERMIT"]: "-",
		["EXP MCU"]: "-",
	},
];

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const columnHelper = createColumnHelper<ITable>();

export default function ShowDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

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
