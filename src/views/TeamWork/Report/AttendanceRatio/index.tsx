import { Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import {
	DateText,
	ThItemContainer,
	TitleText,
	Wrapper,
	WrapperTable,
	WrapperTitle,
} from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { IcEdit } from "atoms/Icon";
import TopFilter from "./TopFilter";
import SecondFilter from "./SecondFilter";
import TableComponent2 from "src/components/organism/TableComp2";
import TabsText from "./TabsText";
import Department from "./Department";
import YTD from "./YTD";

interface IProps {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		nrp: "HD787",
		name: "Hd123",
		date: `33`,
		code: "2022-17-08",
		in: "2022-17-08",
		out: "2022-17-08 02:12:12",
		job: "2022-17-08 02:12:12",
		pos: "2022-17-08 02:12:12",
		act: "2022-17-08 02:12:12",
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
			cell: (info) => {
				return info.column.id === "act" ? (
					<Grid>
						<IcEdit width={20} style={{ cursor: "pointer" }} />
					</Grid>
				) : (
					info.getValue()
				);
			},
			header: (data) => {
				return (
					<ThItemContainer key={index}>
						<Grid>
							<span>{item}</span>
						</Grid>
						{data.column.id !== "act" && (
							<Grid container flexDirection="column">
								<ArrowUp></ArrowUp>
								<AD></AD>
							</Grid>
						)}
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
						<DateText>
							Current Date : <span>01-08-2022</span>{" "}
						</DateText>
					</Grid>
					<TopFilter />
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
			<TabsText
				activeTabs={activeTabs}
				setActiveTabs={setActiveTabs}
				styles={{
					margin: "10px 0 20px",
					backgroundColor: "white",
					padding: "5px 15px",
					borderRadius: "3px",
					columnGap: "40px",
					rowGap: "10px",
				}}
			/>
			<WrapperTitle>
				<TitleText>Attendance Ratio</TitleText>
			</WrapperTitle>
			<WrapperTable>{renderTab()}</WrapperTable>
		</Wrapper>
	);
}
