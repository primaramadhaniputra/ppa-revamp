import { Grid } from "@hudoro/neron";
import React from "react";
import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { TitleText, Wrapper, WrapperTitle } from "../../../styles";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import { dataTable } from "./dataTable";
import { colors } from "utils/styles";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Model"]: "-",
		["Code Unit"]: "-",
		["Owner"]: "-",
		["Delivery Date"]: "-",
		["MOHH"]: "-",
		["Start"]: "-",
		["Stop"]: "-",
		["TOH"]: "-",
		["MNG"]: "-",
		["PLT"]: "-",
		["TRV"]: "-",
		["ID"]: "-",
		["DL"]: "-",
		["Wait Eqp"]: "-",
		["No Opt"]: "-",
		["SCH"]: "-",
		["UNSCH"]: "-",
		["TYRE"]: "-",
		["ACC"]: "-",
		["Fuel Const"]: "-",
		["Plan"]: "-",
		["With No Opt"]: "-",
	};
});

export default function Material() {
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);

	const table = useReactTable({
		data: defaultDataTable,
		columns: dataTable,
		state: {
			sorting,
			rowSelection,
			globalFilter,
		},
		onSortingChange: setSorting,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
		getSortedRowModel: getSortedRowModel(),
	});

	const handleChangeTotalShowData = (e: { target: { value: number } }) => {
		table.setPageSize(e.target.value);
	};

	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>BAPA CATEGORY A2B</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<StyledDropdownMenu
						title="Owner"
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
			<Wrapper>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2
					table={table}
					tableTdStyles={{ padding: 0 }}
					tableTheadStyles={{ backgroundColor: colors.primary }}
					tableThStyles={{ color: "white" }}
				/>
			</Wrapper>
		</>
	);
}
