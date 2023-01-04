import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { IcEdit } from "atoms/Icon";
import FlyingForm from "./FlyingForm";
import { colors } from "utils/styles";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["NRP"]: "HD787",
		["Name"]: "Hd123",
		["Jabatan"]: `331`,
		["Posisi"]: "2022-17-08",
		["Action"]: "2022-17-08",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function EmployeeMutation() {
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
				return item === "Action" ? (
					<Grid>
						<IcEdit
							width={18}
							style={{ cursor: "pointer" }}
							onClick={(target) => handleShowDetail(target)}
							color={colors.primary}
						/>
					</Grid>
				) : (
					info.renderValue()
				);
			},
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
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<TitleText>Employee Mutation</TitleText>
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
