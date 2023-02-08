import { Grid } from "@hudoro/neron";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import ShowDetail from "./ShowDetail";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import ButtonFile from "atoms/ButtonFile";
import FlyingForm from "./FlyingForm";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		id: "-",
		lapangan: "-",
		tahunan: `-`,
		leave: "-",
		back: "-",
		status: "-",
		action: "",
	};
});

export default function LeavingApplication() {
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	// leave app
	const [isShowLeaveApp, setIsShowLeaveApp] = React.useState(false);
	const [formLeaveAppPosition, setformLeaveAppPosition] = React.useState(0);

	const handleShowLeaveApp = (target: { pageY: number; clientY: number }) => {
		setIsShowLeaveApp(true);
		setformLeaveAppPosition(target.pageY - target.clientY);
	};

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "id",
			cell: (info) => info.getValue(),
			header: () => <span>ID</span>,
		},
		{
			header: "Cuti",
			columns: [
				{
					accessorFn: (row) => row.lapangan,
					id: "lapangan",
					cell: (info) => info.getValue(),
					header: () => <span>Lapangan</span>,
				},
				{
					accessorKey: "tahunan",
					header: () => <span>Tahunan</span>,
				},
			],
		},
		{
			header: "Date",
			columns: [
				{
					accessorKey: "leave",
					header: () => <span>Leave</span>,
				},
				{
					accessorKey: "back",
					header: () => <span>Back</span>,
				},
			],
		},
		{
			accessorKey: "status",
			header: () => <span>Status</span>,
		},
		{
			accessorKey: "action",
			cell: () => (
				<Grid
					container
					justifyContent="center"
					style={{ cursor: "pointer" }}
					onClick={handleShowDetail}
				>
					<IcEye width={18} color={colors.blue} />
				</Grid>
			),
			header: () => <span>Action</span>,
		},
	];

	return (
		<>
			<FlyingForm
				isShowDetail={isShowLeaveApp}
				setIsShowDetail={setIsShowLeaveApp}
				formPosition={formLeaveAppPosition}
			/>
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					onClick={handleShowLeaveApp}
				>
					<TitleText>Leaving Application</TitleText>
					<ButtonFile title="LEAVE APPLICATION" />
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
