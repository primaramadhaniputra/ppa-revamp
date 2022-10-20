import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import SecondFilter from "./SecondFilter";
import { IconContainer, IconWrapper, TableTitle, Wrapper } from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { Icon } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import FlyingForm from "./FlyingForm";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "../../styles";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		["No"]: "HD787",
		["Subject Group"]: `33${index}`,
		["Name Quiz"]: `33${index}`,
		["Total"]: "123",
		["Duration"]: "123",
		["Valid Date"]: "123",
		["Token"]: "123",
		["Action"]: "",
	};
});

export default function Schedule() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const deleteQuestion = async () => {
		if (confirm("Are you sure to delete this question ? ")) {
			return alert("siiiiiiuuuuuuuuuuuuuuuuuuuuu");
		}
		return alert("siiiiiiuuuuuuuuuuuuuuuuuuuuu");
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return (
					<>
						{info.column.id === "Action" ? (
							<IconWrapper>
								<IconContainer title="edit">
									<IcEdit
										width={20}
										cursor="pointer"
										color="white"
										strokeWidth={1.5}
										onClick={(target) => handleShowDetail(target)}
									/>
								</IconContainer>
								<IconContainer title="delete">
									<Icon iconName="IcClose" color="white" onClick={deleteQuestion} />
								</IconContainer>
							</IconWrapper>
						) : (
							info.getValue()
						)}
					</>
				);
			},
			header: (data) => {
				return (
					<ThItemContainer key={index}>
						{data.header.id === "Action" ? (
							<span>{item}</span>
						) : (
							<>
								<span>{item}</span>
								<CompleteArrow />
							</>
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

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Wrapper>
				<TableTitle variant="h4">Data List Schedule Quiz</TableTitle>
				<SecondFilter
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
				<TableComponent2 table={table} />
			</Wrapper>
		</>
	);
}
