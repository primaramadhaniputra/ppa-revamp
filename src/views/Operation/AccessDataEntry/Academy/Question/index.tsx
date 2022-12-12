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
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcCloseCircleFilled, IcEdit } from "atoms/Icon";
import { Container } from "./styles";
import FormMultipleChoice from "./FormMultipleChoice";

interface IProps {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		["ID"]: "-",
		["Question"]: "-",
		["Subject"]: "-",
		["Group Subject"]: "-",
		["Type Question"]: "-",
		["Action"]: "-",
	},
];

export default function Question() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	// multipel form choice state
	const [isShowMultipleForm, setIsShowMultipleForm] = React.useState(false);
	const [multipleFormPosition, setMultipleFormPosition] = React.useState(0);
	//

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowFormMultipleChoice = (target: { pageY: number; clientY: number }) => {
		setIsShowMultipleForm(true);
		setMultipleFormPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return info.column.id === "Action" ? (
					<Grid container justifyContent="center" alignItems="center" gap={5}>
						<IcEdit width={20} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
						<IcCloseCircleFilled width={20} color={colors.blue} cursor="pointer" />
					</Grid>
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
			<FormMultipleChoice
				isShowDetail={isShowMultipleForm}
				setIsShowDetail={setIsShowMultipleForm}
				formPosition={multipleFormPosition}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>DATA LIST POST TEST</TitleText>
				<Container style={{ flex: 1 }} gap={15}>
					<Grid container>
						<StyledButton
							style={{
								backgroundColor: colors.orange,
								fontSize: fontSizing.md.fontSize,
								padding: "5px 0",
								fontWeight: fontWeights.bold,
								minWidth: "200px",
							}}
							onClick={handleShowFormMultipleChoice}
						>
							Add Multiple Choice
						</StyledButton>
					</Grid>
					<Grid container>
						<StyledButton
							style={{
								backgroundColor: colors.orange,
								fontSize: fontSizing.md.fontSize,
								padding: "5px 0",
								fontWeight: fontWeights.bold,
								minWidth: "150px",
							}}
							onClick={handleShowDetail}
						>
							Add essay
						</StyledButton>
					</Grid>
				</Container>
			</WrapperTitle>
			<Wrapper>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} tableTdStyles={{ padding: 0 }} />
			</Wrapper>
		</>
	);
}