import { Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import SecondFilter from "./SecondFilter";
import TableComponent2 from "src/components/organism/TableComp2";
import { ThItemContainer, TitleText, Wrapper } from "../styles";
import CompleteArrow from "atoms/CompleteArrow";
import TabV2 from "molecules/TabV2";
import RevisiDropdown from "atoms/RevisiDropdown";
import TopFilter from "src/components/organism/TopFilter";
import dynamic from "next/dynamic";
import DateText from "atoms/DateText";
import LayoutTable from "src/components/layouts/LayoutTable";

interface IProps {
	[x: string]: any;
}

const YTD = dynamic(() => import("./YTD"));
const Department = dynamic(() => import("./Department"));

const tabTitle = ["Individual", "Department", "Manpower", "YTD"];

export const defaultDataTable = [
	{
		["Nrp"]: "-",
		["Name"]: "-",
		["Dept"]: "-",
		["Posisi"]: "-",
		["Comp"]: "-",
		["D"]: "-",
		["N"]: "-",
		["IO"]: "-",
		["NC"]: "-",
		["L"]: "-",
		["T"]: "-",
		["O"]: "-",
		["S"]: "-",
		["I"]: "-",
		["A"]: "-",
		["K"]: "-",
		["P"]: "-",
		["R"]: "-",
		["H"]: "-",
		["NR"]: "-",
		["ATR"]: "-",
	},
];

export default function AttendanceRatio() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [activeTabs, setActiveTabs] = React.useState(0);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: (data) => {
				return (
					<ThItemContainer key={index}>
						<span>{item}</span>
						{data.column.id !== "Act" && <CompleteArrow />}
					</ThItemContainer>
				);
			},
		};
	});

	const table = useReactTable({
		data: defaultDataTable,
		columns,
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

	const renderTab = () => {
		if (activeTabs === 0) {
			return (
				<>
					<Grid container justifyContent="space-between" gap={10} style={{ margin: "15px 0" }}>
						<Text variant="h4" style={{ fontWeight: fontWeights.semi }}>
							Individual Attendance Ratio
						</Text>
						<DateText />
					</Grid>
					<SecondFilter
						table={table}
						handleChangeTotalShowData={handleChangeTotalShowData}
						globalFilter={globalFilter}
						setGlobalFilter={setGlobalFilter}
					/>
					<TableComponent2 table={table} />
				</>
			);
		} else if (activeTabs === 1) {
			return <Department />;
		} else if (activeTabs === 2) {
			return <Department />;
		} else {
			return <YTD />;
		}
	};

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTabs} setActiveTab={setActiveTabs} />
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText>Attendance Ratio</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Loader" />
				</Grid>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Loader" />
				</Grid>
			</TopFilter>
			<LayoutTable>{renderTab()}</LayoutTable>
		</Wrapper>
	);
}
