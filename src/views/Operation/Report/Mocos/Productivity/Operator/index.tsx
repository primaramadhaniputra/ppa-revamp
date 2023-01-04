import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTitle } from "../../../styles";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import { colors } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcEye } from "atoms/Icon";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "19019713",
		["Name"]: "ANDIKA SETYO LAKSONO",
		["Posisi"]: "OPERATOR PC400",
		["Mode Unit"]: "PC400LCSE-8",
		["HM"]: "-",
		["Distance"]: "-",
		["Cycle"]: "-",
		["Production"]: "-",
		["Productivity"]: "-",
		["Detail"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Operator() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);
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
				if (info.column.id === "Detail") {
					return (
						<Grid container justifyContent="center">
							<IcEye
								color={colors.blue}
								style={{ cursor: "pointer" }}
								width={20}
								onClick={handleShowDetail}
							/>
						</Grid>
					);
				} else {
					return info.renderValue();
				}
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
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Productivity By Operator</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<StyledDropdownMenu
						title="Activity"
						data={[1, 2]}
						activeDropdown={activeShiftDropDown}
						setActiveDropdown={setActiveShiftDropDown}
					/>
				</Grid>
				<Grid>
					<StyledDropdownMenu
						title="Model"
						data={[1, 2]}
						activeDropdown={activeShiftDropDown}
						setActiveDropdown={setActiveShiftDropDown}
					/>
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
