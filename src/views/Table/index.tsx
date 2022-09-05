import { Card, Lozenge } from "@hudoro/neron";
import React from "react";
import InputComp from "./InputComp";
import PaginationComp from "./PaginationComp";
import { Wrapper } from "./styles";
import TableComp from "./TableComp";

import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultDataTable } from "utils/dummy";

interface Person {
  [x: string]: any;
}

export default function Table() {
  const [rowSelection, setRowSelection] = React.useState({});
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "NRP",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.Nama,
      id: "Nama",
      cell: (info) => info.getValue(),
      header: () => <span>Nama</span>,
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Perusahaan",
      header: () => "Perusahaan",
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Dept",
      header: () => <span>Dept</span>,
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Jabatan",
      header: "Jabatan",
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Posisi",
      header: "Posisi",
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Achievment",
      header: "Achievment",
      footer: (props) => props.column.id,
      cell: (info) => (
        <Lozenge label={info.getValue()} variant="danger-strong" />
      ),
      enableColumnFilter: false,
    },
    {
      accessorKey: "aksi",
      header: "aksi",
      footer: (props) => props.column.id,
      cell: (info) => (
        <span onClick={() => alert("oke")} style={{ cursor: "pointer" }}>
          {info.getValue()}
        </span>
      ),
      enableColumnFilter: false,
    },
  ];

  const table = useReactTable({
    data: defaultDataTable,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

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
        />
        <TableComp table={table} />
        <PaginationComp
          dataPerPage={table.getRowModel().rows.length}
          totalData={table.getPreFilteredRowModel().rows.length}
          currentPage={table.getState().pagination.pageIndex + 1}
          totalPage={table.getPageCount()}
          nextButtonEvent={() => table.nextPage()}
          previousButtonEvent={() => table.previousPage()}
        />
      </Card>
    </Wrapper>
  );
}
