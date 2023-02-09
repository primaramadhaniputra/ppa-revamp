import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { colors, fontWeights } from "utils/styles";
import { fontFamilies, Text } from "@hudoro/neron";
import DataDetail from "./DataDetail";
import { THContainer } from "atoms/THContainer";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		Dept: "-",
		MP: "-",
		["New Version"]: `-`,
		["Old Version"]: `-`,
		Updated: "-",
	},
];

export default function AppVersionControl() {
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};
	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "Dept",
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer>
					<span>Dept</span>
				</THContainer>
			),
		},
		{
			accessorFn: (row) => row.MP,
			id: "MP",
			cell: (info) => info.getValue(),
			header: () => <span>MP</span>,
		},
		{
			accessorKey: "New Version",
			cell: (info) => (
				<span style={{ color: colors.blueGrey, cursor: "pointer" }} onClick={handleShowDetail}>
					{`${info.renderValue()}`}
				</span>
			),
			header: () => <span>New Version</span>,
		},
		{
			accessorKey: "Old Version",
			cell: (info) => (
				<span style={{ color: colors.blueGrey, cursor: "pointer" }} onClick={handleShowDetail}>
					{`${info.renderValue()}`}
				</span>
			),
			header: () => <span>Old Version</span>,
		},
		{
			accessorKey: "Updated",
			header: () => <span>Updated</span>,
		},
	];

	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<LayoutTable>
				<Text
					variant="h4"
					style={{
						textAlign: "center",
						fontFamily: fontFamilies.poppins,
						fontWeight: fontWeights.semi,
						marginBottom: "20px",
					}}
				>
					Mobile App Version Control MHU
				</Text>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
