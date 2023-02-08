import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { P } from "./styles";
import ShowDetail from "./ShowDetail";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		["DEPARTEMENT"]: "-",
		["TOTAL"]: "-",
		["RESIKO RENDAH"]: "-",
		["RESIKO SEDANG"]: "-",
		["RESIKO TINGGI"]: "-",
		["UNFIT"]: "-",
	},
];

const columnHelper = createColumnHelper<IProps>();

export default function SummaryTable() {
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
					<span style={{ padding: "5px" }}>{`${info.getValue()}`}</span>
				) : (
					<P style={{ padding: "5px" }} onClick={handleShowDetail}>
						{`${info.getValue()}`}
					</P>
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
