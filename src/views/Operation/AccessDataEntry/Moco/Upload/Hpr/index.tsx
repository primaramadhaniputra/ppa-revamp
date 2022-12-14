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
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import Upload from "./Upload";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "",
		["Time"]: "",
		["Hauler"]: "",
		["Loader"]: "",
		["Material"]: "",
		["Seam"]: "",
		["Pit"]: "",
		["Production"]: "",
	};
});

export default function HPR() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowUpload, setIsShowUpload] = React.useState(false);
	const [formUploadPosition, setformUploadPosition] = React.useState(0);

	const handleShowUpload = (target: { pageY: number; clientY: number }) => {
		setIsShowUpload(true);
		setformUploadPosition(target.pageY - target.clientY);
	};

	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
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
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Upload
				isShowDetail={isShowUpload}
				setIsShowDetail={setIsShowUpload}
				formPosition={formUploadPosition}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Hourly Production</TitleText>
				<Grid container gap={10} style={{ maxWidth: "max-content" }}>
					<Grid>
						<StyledButton
							style={{
								backgroundColor: colors.orange,
								fontSize: fontSizing.md.fontSize,
								padding: "5px 10px",
								fontWeight: fontWeights.bold,
							}}
							onClick={handleShowDetail}
						>
							+
						</StyledButton>
					</Grid>
					<Grid>
						<StyledButton
							style={{
								backgroundColor: colors.orange,
								fontSize: fontSizing.md.fontSize,
								padding: "5px 10px",
								fontWeight: fontWeights.bold,
							}}
							onClick={handleShowUpload}
						>
							Upload
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
