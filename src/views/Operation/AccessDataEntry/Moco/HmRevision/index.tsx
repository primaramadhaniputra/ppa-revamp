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
import { ThItemContainer, TitleText, Wrapper, WrapperTitle } from "../../styles";
import { TextTable } from "../../styles";
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcEdit } from "atoms/Icon";
import TopFilter from "src/components/organism/TopFilter";
import UltimateInput from "src/components/organism/UltimateInput";
import StyledButton from "atoms/StyledButton";
import UpdateHm from "./UpdateHm";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "-",
		["NRP"]: "-",
		["Name"]: "-",
		["Roster"]: "-",
		["HM Start"]: "-",
		["HM Stop"]: "-",
		["HM Step"]: "-",
		["Step"]: "-",
		["HM"]: "-",
		["Activity"]: "-",
		["Revision By"]: "-",
		["Last Update"]: "-",
		["Action"]: "",
	};
});

export default function HmRevision() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const [isShowUpdateHm, setIsShowUpdateHm] = React.useState(false);
	const [formPositionUpdateHm, setformPositionUpdateHm] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};
	const handleShowUpdateHm = (target: { pageY: number; clientY: number }) => {
		setIsShowUpdateHm(true);
		setformPositionUpdateHm(target.pageY - target.clientY);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return info.column.id === "Action" ? (
					<IcEdit
						width={18}
						color={colors.blue}
						style={{ cursor: "pointer" }}
						onClick={handleShowUpdateHm}
					/>
				) : (
					<TextTable>{info.getValue()}</TextTable>
				);
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
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<UpdateHm
				isShowDetail={isShowUpdateHm}
				setIsShowDetail={setIsShowUpdateHm}
				formPosition={formPositionUpdateHm}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>HM Revision</TitleText>
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
						🖍 Add
					</StyledButton>
				</Grid>
			</WrapperTitle>
			<TopFilter noDate={true}>
				<Grid>
					<UltimateInput isInputSelect={true} title={"Code Number :"} maxLableWidth="112px" />
				</Grid>
			</TopFilter>
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
