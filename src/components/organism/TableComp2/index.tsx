import React from "react";
import PaginationComp from "./PaginationComp";
import { Wrapper } from "./styles";
import TableComp from "./TableComp";

interface Person {
  noPagination?: boolean;
  withFooter?: boolean;
  [x: string]: any;
}

export default function TableComponent2({
  table,
  noPagination,
  withFooter,
}: Person) {
  return (
    <Wrapper>
      <TableComp table={table} withFooter={withFooter} />
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
