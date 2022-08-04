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
import { colors, fontWeights } from "utils/styles";
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
    ["New Version"]: `33${index}`,
    ["Old Version"]: `33${index}`,
    Updated: "2022-17-08",
  };
});

export default function AppVersionControl() {
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
      footer: () => <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>TOTAL</span>,
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
      footer: () => <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>123.23</span>,
    },
    {
      accessorKey: "New Version",
      cell: (info) => <span style={{ color: colors.blueGrey }}>{info.getValue()}</span>,
      header: () => (
        <span>
          New Version
        </span>
      ),
      footer: () => <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>123.23</span>,
    },
    {
      accessorKey: "Old Version",
      cell: (info) => <span style={{ color: colors.blueGrey }}>{info.getValue()}</span>,
      header: () => (
        <span>
          Old Version
        </span>
      ),
      footer: () => <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>123.23</span>,
    },
    {
      accessorKey: "Updated",
      header: () => (
        <span>
          Updated
        </span>
      ),
      footer: () => <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>123.23</span>,
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
      <Text variant="h4" style={{ textAlign: 'center', fontFamily: fontFamilies.poppins, fontWeight: fontWeights.semi, marginBottom: '20px' }}>Mobile App Version Control MHU</Text>
      <TableComponent2 table={table} noPagination={true} withFooter={true} />
    </Container>
  );
}
