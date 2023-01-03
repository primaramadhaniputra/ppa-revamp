import React, { useMemo } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { Description, Title } from "./styles";
import { Grid } from "@hudoro/neron";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["BULAN"]: "-",
		["NRP"]: "-",
		["NAMA"]: "-",
		["DEPT"]: "-",
		["KTA"]: "-",
		["TTA"]: "-",
		["INS"]: "-",
		["OBS"]: "-",
		["PKR"]: "-",
		["WUC"]: "-",
		["SMT"]: "-",
		["COC"]: "-",
		["AHC"]: "-",
	};
});

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}
const columnHelper = createColumnHelper<Person>()

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
				title="Detail Achievement SAP"
				width={1500}
			>
				<MigrateTable data={defaultDataTable} columns={columns} />
				<Grid style={{ marginTop: "20px" }} container flexDirection="column" gap={5}>
					<Title>Note :</Title>
					<Description>
						untuk perhitungan achievement, nilai actual maksimal adalah nilai plan. contoh act 10 /
						plan 9 maka ketika perhitungan ach menjadi 9/9
					</Description>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
