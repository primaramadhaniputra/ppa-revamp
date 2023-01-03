import { Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { fontSizing, fontWeights } from "utils/styles";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}
interface IColumns {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No"]: "-",
		["Date"]: "-",
		["Sanksi"]: "-",
		["Jenis"]: "-",
		["Status"]: "-",
	};
});

const columnHelper = createColumnHelper<IColumns>()

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="RIWAYAT PELANGGARAN"
			>
				<Text
					variant="h4"
					style={{
						marginBottom: "20px",
						fontSize: fontSizing.xs.fontSize,
						fontWeight: fontWeights.bold,
					}}
				>
					13040438 - MARTINUS NAPA
				</Text>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutOverlayData>
		</>
	);
}
