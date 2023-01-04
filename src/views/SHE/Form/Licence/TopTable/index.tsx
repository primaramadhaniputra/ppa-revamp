import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { HoverP } from "./styles";
import ShowDetail from "./ShowDetail";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(5).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["DEPARTEMENT"]: "ENG",
		["MP"]: "68",
		["AKTIF SIMPER < 30 HARI"]: "1",
		["SIMPER EXPIRED"]: "0",
		["AKTIF PERMIT < 30 HARI"]: "10",
		["AKTIF MCU < 30"]: "10",
		["EXPIRED MCU"]: "4",
	};
});

const columnHelper = createColumnHelper<IProps>();

export default function TopTable() {
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
			cell: (info) => {
				return info.column.id === "DEPARTEMENT" ? (
					<span style={{ padding: "8px 5px" }}>{`${info.getValue()}`}</span>
				) : (
					<HoverP onClick={handleShowDetail} style={{ padding: "8px 5px" }}>
						{`${info.getValue()}`}
					</HoverP>
				);
			},
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</>
	);
}
