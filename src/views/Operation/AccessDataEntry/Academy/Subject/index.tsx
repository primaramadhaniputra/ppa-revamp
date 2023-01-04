import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../styles";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcEdit, IcEye, IcPlusCircle } from "atoms/Icon";
import DataDetailByTable from "./DataDetailByTable";
import AddGroup from "./AddGroup";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No"]: "-",
		["ID"]: "-",
		["Subject"]: "-",
		["Created Date"]: "-",
		["Modified Date"]: "-",
		["Action"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Subject() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [isShowDetailByTable, setIsShowDetailByTable] = React.useState(false);
	const [isShowAddGroup, setIsShowAddGroup] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowDetailByTable = (target: { pageY: number; clientY: number }) => {
		setIsShowDetailByTable(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowAddGroup = (target: { pageY: number; clientY: number }) => {
		setIsShowAddGroup(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return info.column.id === "Action" ? (
					<Grid container justifyContent="center" alignItems="center" gap={5}>
						<IcPlusCircle
							width={20}
							color={colors.blue}
							cursor="pointer"
							onClick={handleShowAddGroup}
						/>
						<IcEdit width={20} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
						<IcEye
							width={20}
							color={colors.blue}
							cursor="pointer"
							onClick={handleShowDetailByTable}
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
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<DataDetailByTable
				isShowDetail={isShowDetailByTable}
				setIsShowDetail={setIsShowDetailByTable}
				formPosition={formPosition}
			/>
			<AddGroup
				isShowDetail={isShowAddGroup}
				setIsShowDetail={setIsShowAddGroup}
				formPosition={formPosition}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>DATA LIST POST TEST</TitleText>
				<Grid style={{ maxWidth: "150px" }}>
					<StyledButton
						style={{
							backgroundColor: colors.orange,
							fontSize: fontSizing.md.fontSize,
							padding: "5px 0",
							fontWeight: fontWeights.bold,
						}}
						onClick={handleShowDetail}
					>
						Create Post
					</StyledButton>
				</Grid>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
