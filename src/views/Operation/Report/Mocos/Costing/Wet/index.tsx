import { Grid } from "@hudoro/neron";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTitle } from "../../../styles";
import { TextTable } from "./styles";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["Activity"]: "Coal Getting Cleaning",
		["Production"]: "298.503",
		["Distance"]: "2.879",
		["Equipment"]: "321",
		["Fuel"]: "746",
		["Total"]: "1.067",
		["Plan"]: "1.067",
		["Actual"]: "1.067",
		["Deviation"]: "1.067",
	};
});

export default function Wet() {
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);

	const columns: ColumnDef<IProps>[] = [
		{
			accessorKey: "Activity",
			cell: (info) => info.getValue(),
			footer: (props) => props.column.id,
		},
		{
			accessorKey: "Production",
			cell: (info) => info.getValue(),
			footer: (props) => props.column.id,
		},
		{
			header: `Cost USD`,
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: "Equipment",
					cell: (info) => info.getValue(),
					footer: (props) => props.column.id,
				},
				{
					accessorFn: (row) => row.Fuel,
					id: "Fuel",
					cell: (info) => <TextTable>{info.getValue()}</TextTable>,
					header: () => <TextTable>Fuel</TextTable>,
					footer: (props) => props.column.id,
				},
				{
					accessorKey: "Total",
					cell: (info) => info.getValue(),
					footer: (props) => props.column.id,
				},
			],
		},
		{
			header: "Cost USD/bcm",
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: "Plan",
					cell: (info) => info.getValue(),
					footer: (props) => props.column.id,
				},
				{
					accessorFn: (row) => row.Actual,
					id: "Actual",
					cell: (info) => info.getValue(),
					header: () => <span>Actual</span>,
					footer: (props) => props.column.id,
				},
				{
					accessorKey: "Deviation",
					cell: (info) => info.getValue(),
					footer: (props) => props.column.id,
				},
			],
		},
	];

	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Operation Wet Cost</TitleText>
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
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
