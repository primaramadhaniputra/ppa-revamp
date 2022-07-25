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
import { Container } from "./styles";

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    ID: "HD787",
    Event: "Hd123",
    Repeat: `33${index}`,
    Interval: "2022-17-08",
    Time: "2022-17-08",
    ["Last Executed"]: "2022-17-08",
  };
});

export default function Events() {
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
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.Event,
      id: "Event",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          Event
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Repeat",
      header: () => (
        <span>
          Repeat
        </span>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Interval",
      header: () => (
        <span>
          Interval
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Time",
      header: () => (
        <span>
          Time
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Last Executed",
      header: () => (
        <span>
          Last Executed
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
    <Container>

      <TableComponent
        table={table}
        type={systemTypeValue}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        filterBottom={false}
        noButton={true}
        noSearch={true}
      />
    </Container>
  );
}
