import React from "react";
import InputComp from "./InputComp";
import PaginationComp from "./PaginationComp";
import { Wrapper } from "./styles";
import TableComp from "./TableComp";

interface Person {
  type?: string;
  globalFilter?: string;
  setGlobalFilter?: React.Dispatch<React.SetStateAction<string>>;
  filterBottom: boolean;
  noButton?: boolean;
  noSearch?: boolean;
  [x: string]: any;
}

export default function TableComponent({
  table,
  globalFilter,
  setGlobalFilter,
  filterBottom,
  noButton,
  noSearch,
}: Person) {
  const handleChangeTotalShowData = (e: { target: { value: number } }) => {
    table.setPageSize(e.target.value);
  };
  return (
    <Wrapper>
      <InputComp
        value={{
          id: 0,
          values: `${table.getState().pagination.pageSize}`,
          label: `${table.getState().pagination.pageSize}`,
        }}
        handleChange={handleChangeTotalShowData}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        noButton={noButton}
        noSearch={noSearch}
      />
      <TableComp table={table} filterBottom={filterBottom} />
      <PaginationComp
        dataPerPage={table.getRowModel().rows.length}
        totalData={table.getPreFilteredRowModel().rows.length}
        currentPage={table.getState().pagination.pageIndex + 1}
        totalPage={table.getPageCount()}
        nextButtonEvent={() => table.nextPage()}
        previousButtonEvent={() => table.previousPage()}
      />
    </Wrapper>
  );
}
