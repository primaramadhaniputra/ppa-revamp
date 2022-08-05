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
import { Container, THContainer } from "./styles";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import Arrow from "atoms/Arrow";

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

export default function AbsMachine() {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "ID",
      cell: (info) => info.getValue(),
      header: () => (
        <THContainer>
          <span>
            ID
          </span>
          <Arrow />
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.IP,
      id: "IP",
      cell: (info) => info.getValue(),
      header: () => (
        <THContainer>
          <span>
            IP
          </span>
          <Arrow />
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Lokasi",
      header: () => (
        <THContainer>
          <span>
            Lokasi
          </span>
          <Arrow />
        </THContainer>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Last download",
      header: () => (
        <THContainer>
          <span>
            Last Download
          </span>
          <Arrow />
        </THContainer>
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
  const handleChangeTotalShowData = (e: { target: { value: number } }) => {
    table.setPageSize(e.target.value);
  };
  return (
    <Container>
      <TableFilterSearch table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} withButton={false} buttonTitle='EXPORT' />
      <TableComponent2 table={table} />
    </Container>
  );
}
