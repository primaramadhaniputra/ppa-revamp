import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { IcEdit, IcPlusCircle } from "atoms/Icon";
import { colors } from "utils/styles";
import FlyingForm from "./FlyingForm";
import StyledButton from "atoms/StyledButton";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Blok"]: "",
		["Jml Kamar"]: "",
		["Total Kapasitas"]: "",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function Blok() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) =>
			info.column.id === "Action" ? (
				<IcEdit width={14} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
			) : (
				info.getValue()
			),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Grid container justifyContent="flex-end" style={{ marginBottom: "5px" }}>
				<StyledButton
					style={{
						backgroundColor: colors.orange,
						maxWidth: "max-content",
						display: "flex",
						padding: 7,
					}}
					onClick={handleShowDetail}
				>
					<IcPlusCircle width={16} />
				</StyledButton>
			</Grid>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
