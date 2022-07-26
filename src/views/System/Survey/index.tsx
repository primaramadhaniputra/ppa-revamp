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
import { fontWeights } from "utils/styles";
import { fontFamilies, Text } from "@hudoro/neron";
import { Container } from "./styles";
import TableComponent2 from "src/components/organism/TableComp2";

interface Person {
  [x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    Dept: "HD787",
    MP: "Hd123",
    ["Sudah mengisi"]: `33${index}`,
    Achievment: "2022-17-08",
  };
});

export default function Survey() {
  const [rowSelection, setRowSelection] = React.useState({});
  // const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "Dept",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          Dept
        </span>
      ),
      // footer: (props) => props.column.id,
      footer: () => <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>Total</span>,
    },
    {
      accessorFn: (row) => row.MP,
      id: "MP",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          MP
        </span>
      ),
      footer: () => <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>123</span>,
    },
    {
      accessorKey: "Sudah mengisi",
      header: () => (
        <span>
          Sudah mengisi
        </span>
      ),
      footer: () => <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>123</span>,
    },

    {
      accessorKey: "Achievment",
      header: () => (
        <span>
          Achievment
        </span>
      ),
      footer: () => <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>123</span>,
    },
  ];

  const table = useReactTable({
    data: defaultDataTable,
    columns,
    state: {
      sorting,
      rowSelection,
      // globalFilter,
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
      <Text variant="h4" style={{ textAlign: 'center', fontFamily: fontFamilies.poppins, fontWeight: fontWeights.semi }}>Survey ESG achievment MHU</Text>
      <TableComponent2
        table={table}
        noPagination={true}
      />
    </Container>
  );
}
