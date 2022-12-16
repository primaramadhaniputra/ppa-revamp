import { Grid } from "@hudoro/neron";
import React from "react";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer, TitleText, Wrapper, WrapperTitle, TextTable } from "../../../styles";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing } from "utils/styles";
import DataDetail from "./DataDetail";
import AchData from "./AchData";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
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

export default function Current() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const [isShowUnit, setIsShowUnit] = React.useState(false);
	const [formUnitPosition, setformUnitPosition] = React.useState(0);

	const [isShowAch, setIsShowAch] = React.useState(false);
	const [achPosition, setAchPosition] = React.useState(0);

	const handleShowAch = (target: { pageY: number; clientY: number }) => {
		setIsShowAch(true);
		setAchPosition(target.pageY - target.clientY);
	};

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowUnit(true);
		setformUnitPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return <TextTable>{info.getValue()}</TextTable>;
			},
			header: () => (
				<ThItemContainer key={index} style={{ minWidth: "100px" }}>
					<Grid>
						<span>{item}</span>
					</Grid>
					<CompleteArrow />
				</ThItemContainer>
			),
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

	return (
		<>
			<DataDetail
				isShowUnit={isShowUnit}
				setIsShowUnit={setIsShowUnit}
				formUnitPosition={formUnitPosition}
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
			<Wrapper>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={false}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} tableTdStyles={{ padding: 0 }} />
			</Wrapper>
		</>
	);
}
