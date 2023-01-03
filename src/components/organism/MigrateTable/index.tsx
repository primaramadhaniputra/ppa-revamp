import React from "react";
import {
	useReactTable,
	ColumnFiltersState,
	getCoreRowModel,
	getFilteredRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFacetedMinMaxValues,
	getPaginationRowModel,
	getSortedRowModel,
	FilterFn,
} from "@tanstack/react-table";

import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import GlobaFilter from "./GlobarFilter";
import BottomPagination from "./BottomPagination";
import TableComp from "./TableComp";
import { TableContainer } from "./styles";

declare module "@tanstack/table-core" {
	interface FilterFns {
		fuzzy: FilterFn<unknown>;
	}
	interface FilterMeta {
		itemRank: RankingInfo;
	}
}

export type Person = {
	[x: string]: any;
};

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
	// Rank the item
	const itemRank = rankItem(row.getValue(columnId), value);

	// Store the itemRank info
	addMeta({
		itemRank,
	});

	// Return if the item should be filtered in/out
	return itemRank.passed;
};

export default function MigrateTable({ data, columns }: any) {
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [globalFilter, setGlobalFilter] = React.useState("");

	const table = useReactTable({
		data,
		columns,
		filterFns: {
			fuzzy: fuzzyFilter,
		},
		state: {
			columnFilters,
			globalFilter,
		},
		onColumnFiltersChange: setColumnFilters,
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: fuzzyFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
		debugTable: true,
		debugHeaders: true,
		debugColumns: false,
	});

	return (
		<>
			{/* global filter adalah filter bagian atas yaitu search globalnya */}
			<GlobaFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} table={table} />

			{/* ini adalah tablenya */}
			<TableContainer>
				<TableComp table={table} />
			</TableContainer>

			{/* ini adalah bottom navigationnya */}
			<BottomPagination
				dataPerPage={table.getRowModel().rows.length}
				totalData={table.getPreFilteredRowModel().rows.length}
				currentPage={table.getState().pagination.pageIndex + 1}
				totalPage={table.getPageCount()}
				nextButtonEvent={() => table.nextPage()}
				previousButtonEvent={() => table.previousPage()}
			/>
		</>
	);
}
