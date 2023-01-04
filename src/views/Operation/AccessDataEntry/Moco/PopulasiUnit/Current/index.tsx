import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	SortingState,
	createColumnHelper,
} from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../../styles";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing } from "utils/styles";
import DataDetail from "./DataDetail";
import AchData from "./AchData";
import { IcCloseCircleFilled, IcEdit } from "atoms/Icon";
import Deactivate from "./Deactivate";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Code Number"]: "",
		["Serial Number"]: "",
		["Model"]: "",
		["Category"]: "",
		["Owner"]: "",
		["ABC Activity"]: "",
		["ABC Sub Activity"]: "",
		["Cost Center"]: "",
		["Category BAPA"]: "",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function Current() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const [isShowUnit, setIsShowUnit] = React.useState(false);
	const [formUnitPosition, setformUnitPosition] = React.useState(0);

	const [isShowDeactivate, setIsShowDeactivate] = React.useState(false);
	const [formDeactivatePosition, setformDeactivatePosition] = React.useState(0);

	const [isShowAch, setIsShowAch] = React.useState(false);
	const [achPosition, setAchPosition] = React.useState(0);

	const handleShowDeactivate = (target: { pageY: number; clientY: number }) => {
		setIsShowDeactivate(true);
		setformDeactivatePosition(target.pageY - target.clientY);
	};

	const handleShowAch = (target: { pageY: number; clientY: number }) => {
		setIsShowAch(true);
		setAchPosition(target.pageY - target.clientY);
	};

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowUnit(true);
		setformUnitPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) => {
			return info.column.id === "Action" ? (
				<Grid container justifyContent="center" gap={5}>
					<IcEdit width={16} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
					<IcCloseCircleFilled
						width={16}
						color={colors.danger}
						cursor="pointer"
						onClick={handleShowDeactivate}
					/>
				</Grid>
			) : (
				info.getValue()
			);
		},
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<DataDetail
				isShowUnit={isShowUnit}
				setIsShowUnit={setIsShowUnit}
				formUnitPosition={formUnitPosition}
			/>
			<Deactivate
				isShowDeactivate={isShowDeactivate}
				setIsShowDeactivate={setIsShowDeactivate}
				formDeactivatePosition={formDeactivatePosition}
			/>
			<AchData isShowAch={isShowAch} setIsShowAch={setIsShowAch} achPosition={achPosition} />
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Current</TitleText>
				<Grid container gap={10}>
					<Grid container>
						<StyledButton
							style={{
								backgroundColor: colors.orange,
								padding: "5px 10px",
								fontSize: fontSizing.sm.fontSize,
							}}
							onClick={handleShowDetail}
						>
							New Unit
						</StyledButton>
					</Grid>
					<Grid container>
						<StyledButton
							style={{
								backgroundColor: colors.primary,
								padding: "5px 10px",
								fontSize: fontSizing.sm.fontSize,
							}}
							onClick={handleShowAch}
						>
							Ach.Data 95%
						</StyledButton>
					</Grid>
				</Grid>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
