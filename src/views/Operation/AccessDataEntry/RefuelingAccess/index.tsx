import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../styles";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "-",
		["Name"]: "-",
		["Password"]: "-",
		["Last login"]: "-",
		["Action"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function RefuelingAccess() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Refuelling Access</TitleText>
				<Grid style={{ maxWidth: "100px" }}>
					<StyledButton
						style={{
							backgroundColor: colors.orange,
							fontSize: fontSizing.md.fontSize,
							padding: "3px 0",
							fontWeight: fontWeights.bold,
						}}
						onClick={handleShowDetail}
					>
						+ Add
					</StyledButton>
				</Grid>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
