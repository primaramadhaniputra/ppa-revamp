import { Card } from "@hudoro/neron";
import React from "react";
import InputComp from "./InputComp";
import PaginationComp from "./PaginationComp";
import { PaginationContainer, Wrapper } from "./styles";
import TableComp from "./TableComp";

interface Person {
  type?: string;
  globalFilter?: string;
  setGlobalFilter?: React.Dispatch<React.SetStateAction<string>>;
  filterBottom: boolean;
  [x: string]: any;
}

export default function TableComponent({
  table,
  globalFilter,
  setGlobalFilter,
  filterBottom,
}: Person) {
  const handleChangeTotalShowData = (e: { values: string }) => {
    table.setPageSize(Number(e.values));
  };
  return (
    <Wrapper style={{ marginTop: "50px" }}>
      <Card>
        <InputComp
          value={{
            id: 0,
            values: `${table.getState().pagination.pageSize}`,
            label: `${table.getState().pagination.pageSize}`,
          }}
          handleChange={handleChangeTotalShowData}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <TableComp table={table} filterBottom={filterBottom} />
        <PaginationContainer>
          <PaginationComp
            dataPerPage={table.getRowModel().rows.length}
            totalData={table.getPreFilteredRowModel().rows.length}
            currentPage={table.getState().pagination.pageIndex + 1}
            totalPage={table.getPageCount()}
            nextButtonEvent={() => table.nextPage()}
            previousButtonEvent={() => table.previousPage()}
          />
        </PaginationContainer>
      </Card>
    </Wrapper>
  );
}
