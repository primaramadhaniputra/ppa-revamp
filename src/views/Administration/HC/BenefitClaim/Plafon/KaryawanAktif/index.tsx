import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { IcEdit } from "atoms/Icon";
import { colors, fontSizing, fontWeights } from "utils/styles";
import FlyingForm from "./FlyingForm";
import StyledButton from "atoms/StyledButton";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Nrp"]: "",
		["Nama"]: "",
		["Jabatan"]: "",
		["Dept"]: "",
		["(Rp)Plafon 2021"]: "",
		["(Rp)Plafon 2022"]: "",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function KaryawanAktif() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};
	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) =>
				info.column.id === "Action" ? (
					<IcEdit width={14} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
				) : (
					info.getValue()
				),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Grid container justifyContent="flex-end" style={{ margin: "10px 0" }}>
				<StyledButton
					style={{
						backgroundColor: colors.orange,
						fontSize: fontSizing.md.fontSize,
						padding: "0 5px",
						fontWeight: fontWeights.bold,
						maxWidth: "max-content",
					}}
					onClick={handleShowDetail}
				>
					+
				</StyledButton>
			</Grid>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
