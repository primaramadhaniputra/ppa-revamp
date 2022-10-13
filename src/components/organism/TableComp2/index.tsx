import React from "react";
import PaginationComp from "./PaginationComp";
import { Wrapper } from "./styles";
import TableComp from "./TableComp";

interface Person {
	noPagination?: boolean;
	withFooter?: boolean;
	[x: string]: any;
	styles?: React.CSSProperties;
	tableTdStyles?: React.CSSProperties;
}

export default function TableComponent2({
	table,
	styles,
	noPagination,
	withFooter,
	tableTdStyles,
}: Person) {
	return (
		<Wrapper style={{ ...styles }}>
			<TableComp table={table} withFooter={withFooter} tableTdStyles={tableTdStyles} />
			{!noPagination && (
				<PaginationComp
					dataPerPage={table.getRowModel().rows.length}
					totalData={table.getPreFilteredRowModel().rows.length}
					currentPage={table.getState().pagination.pageIndex + 1}
					totalPage={table.getPageCount()}
					nextButtonEvent={() => table.nextPage()}
					previousButtonEvent={() => table.previousPage()}
				/>
			)}
		</Wrapper>
	);
}
