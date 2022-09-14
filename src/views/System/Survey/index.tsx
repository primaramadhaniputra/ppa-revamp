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

export const defaultDataTable = [
  {
    Dept: "HD787",
    MP: "Hd123",
    ["Sudah mengisi"]: `33`,
    Achievment: "2022-17-08",
  },
];

export default function Survey() {
  const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
  const [rowSelection, setRowSelection] = React.useState({});
  // const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
    return {
      accessorKey: item,
      cell: (info) => info.getValue(),
      header: () => {
        return <span key={index}>{item}</span>;
      },
      footer: (props) => props.column.id,
    };
  });

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
      <Text
        variant="h4"
        style={{
          textAlign: "center",
          fontFamily: fontFamilies.poppins,
          fontWeight: fontWeights.semi,
          marginBottom: "20px",
        }}
      >
        Survey ESG achievment MHU
      </Text>
      <TableComponent2 table={table} noPagination={true} />
    </Container>
  );
}
