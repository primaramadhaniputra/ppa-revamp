import { Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { WrapperTable } from "../../../../../styles";
import FlyingForm from "./FlyingForm";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Share"]: "0",
		["Waiting"]: "0",
		["Score"]: "0",
		["PM"]: "0",
		["Signing"]: "0",
		["Complete"]: "0",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function MonitoringStatusTable() {
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
			cell: (info) => (
				<Text variant="p" style={{ cursor: "pointer" }} onClick={handleShowDetail}>
					{info.getValue()}
				</Text>
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
			<WrapperTable>
				<Text variant="h4" style={{ marginBottom: "20px" }}>
					Monitoring Status
				</Text>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</WrapperTable>
		</>
	);
}
