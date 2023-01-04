import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import StyledButton from "atoms/StyledButton";
import { colors } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcEdit } from "atoms/Icon";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Bulan"]: "-",
		["Tahun"]: "-",
		["Hari"]: "-",
		["Rain"]: "-",
		["Slippery"]: "-",
		["Demo"]: "-",
		["Cust Problem"]: "-",
		["Haze"]: "-",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function Idle() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) => {
			return info.column.id === "Action" ? (
				<IcEdit width={14} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
			) : (
				info.getValue()
			);
		},
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Grid container justifyContent="flex-end" style={{ margin: "10px 0" }}>
				<StyledButton
					style={{
						backgroundColor: colors.orange,
						maxWidth: "max-content",
					}}
					onClick={handleShowDetail}
				>
					Tambah
				</StyledButton>
			</Grid>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
