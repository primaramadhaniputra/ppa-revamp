import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../styles";
import TopFilter from "src/components/organism/TopFilter";
import UltimateInput from "src/components/organism/UltimateInput";
import { IcEdit } from "atoms/Icon";
import { colors, fontSizing, fontWeights } from "utils/styles";
import FlyingForm from "./FlyingForm";
import StyledButton from "atoms/StyledButton";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Grade"]: "",
		["Basic"]: "",
		["Overtime"]: "",
		["UDL"]: "",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Grade() {
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
			cell: (info) =>
				info.column.id === "Action" ? (
					<IcEdit width={14} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
				) : (
					info.getValue()
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
			<WrapperTitle>
				<TitleText>Grade</TitleText>
				<Grid style={{ maxWidth: "50px" }}>
					<StyledButton
						style={{
							backgroundColor: colors.orange,
							fontSize: fontSizing.md.fontSize,
							padding: "5px 0",
							fontWeight: fontWeights.bold,
						}}
						onClick={handleShowDetail}
					>
						➕
					</StyledButton>
				</Grid>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<UltimateInput isInputSelect={true} title="Dept" maxLableWidth="30px" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
