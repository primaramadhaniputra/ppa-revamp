import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../styles";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import { IcEdit } from "atoms/Icon";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Transaction ID"]: "-",
		["Date"]: "-",
		["Unit"]: "-",
		["HM"]: "-",
		["Shift"]: "-",
		["Mechanic"]: "-",
		["LT"]: "-",
		["Oil&grease Type"]: "-",
		["Component"]: "-",
		["Position"]: "-",
		["Qty"]: "-",
		["Lokasi"]: "-",
		["Status"]: "-",
		["Input By"]: "-",
		["Action"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function GocoolRevision() {
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
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Oil, Coolant And Grease Transaction</TitleText>
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
						Input Form
					</StyledButton>
				</Grid>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<RevisiDropdown placeholder="Shift" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
