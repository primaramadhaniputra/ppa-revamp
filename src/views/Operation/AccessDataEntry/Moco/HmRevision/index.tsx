import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../styles";
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcEdit } from "atoms/Icon";
import TopFilter from "src/components/organism/TopFilter";
import UltimateInput from "src/components/organism/UltimateInput";
import StyledButton from "atoms/StyledButton";
import UpdateHm from "./UpdateHm";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "-",
		["NRP"]: "-",
		["Name"]: "-",
		["Roster"]: "-",
		["HM Start"]: "-",
		["HM Stop"]: "-",
		["HM Step"]: "-",
		["Step"]: "-",
		["HM"]: "-",
		["Activity"]: "-",
		["Revision By"]: "-",
		["Last Update"]: "-",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function HmRevision() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const [isShowUpdateHm, setIsShowUpdateHm] = React.useState(false);
	const [formPositionUpdateHm, setformPositionUpdateHm] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};
	const handleShowUpdateHm = (target: { pageY: number; clientY: number }) => {
		setIsShowUpdateHm(true);
		setformPositionUpdateHm(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) => {
			return info.column.id === "Action" ? (
				<IcEdit
					width={18}
					color={colors.blue}
					style={{ cursor: "pointer" }}
					onClick={handleShowUpdateHm}
				/>
			) : (
				info.renderValue()
			);
		},
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<UpdateHm
				isShowDetail={isShowUpdateHm}
				setIsShowDetail={setIsShowUpdateHm}
				formPosition={formPositionUpdateHm}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>HM Revision</TitleText>
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
						🖍 Add
					</StyledButton>
				</Grid>
			</WrapperTitle>
			<TopFilter noDate={true}>
				<Grid>
					<UltimateInput isInputSelect={true} title={"Code Number :"} maxLableWidth="112px" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
