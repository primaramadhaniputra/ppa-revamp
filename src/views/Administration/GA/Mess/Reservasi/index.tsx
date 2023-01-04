import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { colors } from "utils/styles";
import DataPenghuniMess from "./DataPenghuniMess";
import DataKamarTersedia from "./DataKamarTersedia";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Building"]: "",
		["Total Rooms"]: "",
		["Guest Capacity"]: "",
		["Guest"]: "0",
		["Available Bed"]: "0",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function Reservasi() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetailByTable, setIsShowDetailByTable] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const [isShowRoomAvailable, setIsShowRoomAvailable] = React.useState(false);
	const [formRoomAvailablePosition, setformRoomAvailablePosition] = React.useState(0);

	const handleShowDetailByTable = (target: { pageY: number; clientY: number }) => {
		setIsShowDetailByTable(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowRoomAvailble = (target: { pageY: number; clientY: number }) => {
		setIsShowRoomAvailable(true);
		setformRoomAvailablePosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) =>
			info.column.id === "Guest" || info.column.id === "Available Bed" ? (
				<span
					style={{ color: colors.primary, cursor: "pointer" }}
					onClick={info.column.id === "Guest" ? handleShowDetailByTable : handleShowRoomAvailble}
				>
					{`${info.getValue()}`}
				</span>
			) : (
				info.getValue()
			),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<DataPenghuniMess
				isShowDetail={isShowDetailByTable}
				setIsShowDetail={setIsShowDetailByTable}
				formPosition={formPosition}
			/>
			<DataKamarTersedia
				isShowDetail={isShowRoomAvailable}
				setIsShowDetail={setIsShowRoomAvailable}
				formPosition={formRoomAvailablePosition}
			/>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
