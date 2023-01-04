import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { IcEdit } from "atoms/Icon";
import FlyingForm from "./FlyingForm";
import RevisiDropdown from "atoms/RevisiDropdown";
import TopFilter from "src/components/organism/TopFilter";
import { colors } from "utils/styles";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		NRP: "HD787",
		Name: "Hd123",
		Date: `33`,
		Code: "2022-17-08",
		In: "2022-17-08",
		Out: "2022-17-08 02:12:12",
		Job: "2022-17-08 02:12:12",
		Pos: "2022-17-08 02:12:12",
		Act: "2022-17-08 02:12:12",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function UpdateRoster() {
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
				return info.column.id === "Act" ? (
					<Grid>
						<IcEdit
							width={20}
							style={{ cursor: "pointer", color: colors.primary }}
							onClick={handleShowDetail}
							color={colors.blue}
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
				<TitleText>Update Roster</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Name" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
