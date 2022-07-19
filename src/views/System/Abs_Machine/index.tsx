import React from "react";
import TableComponent from "src/components/organism/TableComp";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useSystemTypeValue } from "recoil/SystemType/atom";

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    ID: "HD787",
    IP: "Hd123",
    Lokasi: `33${index}`,
    ["Last download"]: "2022-17-08",
  };
});

export default function Abs_Machine() {
  const systemTypeValue = useSystemTypeValue();
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "ID",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          ID
          <span>{"<>"}</span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.IP,
      id: "IP",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          IP
          <span>{"<>"}</span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Lokasi",
      header: () => (
        <span>
          Lokasi
          <span>{"<>"}</span>
        </span>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Last download",
      header: () => (
        <span>
          Last download
          <span>{"<>"}</span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
  ];

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

  return (
    <TableComponent
      table={table}
      type={systemTypeValue}
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
      filterBottom={false}
      noButton={true}
    />
  );
}
