import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../styles";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcEdit } from "atoms/Icon";
import ActionForm from "./ActionForm";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["ID"]: "-",
		["CN"]: "-",
		["Problem Reported"]: "-",
		["Location"]: "-",
		["Downtime Category"]: "-",
		["Component/Object Down"]: "-",
		["Damage"]: "-",
		["Delay"]: "-",
		["Action Taken"]: "-",
		["GL"]: "-",
		["HM BD"]: "-",
		["HM RFU"]: "-",
		["Mechanic"]: "-",
		["WO Number"]: "-",
		["Activity Remark"]: "-",
		["Start BD"]: "-",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function BreakDown() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	// for action
	const [isShowDetailAction, setIsShowDetailAction] = React.useState(false);
	const [formPositionAction, setformPositionAction] = React.useState(0);

	const handleShowDetailAction = (target: { pageY: number; clientY: number }) => {
		setIsShowDetailAction(true);
		setformPositionAction(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return info.column.id === "Action" ? (
					<IcEdit
						width={14}
						color={colors.blue}
						cursor="pointer"
						onClick={handleShowDetailAction}
					/>
				) : (
					info.getValue()
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
			<ActionForm
				isShowDetail={isShowDetailAction}
				setIsShowDetail={setIsShowDetailAction}
				formPosition={formPositionAction}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Breakdown Monitoring</TitleText>
				<Grid style={{ maxWidth: "max-content" }}>
					<StyledButton
						style={{
							backgroundColor: colors.orange,
							fontSize: fontSizing.md.fontSize,
							padding: "5px 10px",
							fontWeight: fontWeights.bold,
						}}
						onClick={handleShowDetail}
					>
						Breakdown Form
					</StyledButton>
				</Grid>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
