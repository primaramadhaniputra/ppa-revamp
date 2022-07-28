import { fontFamilies, Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { Box, BoxContainer, Container, StatusText, WrapperStatus } from "./styles";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import TableComponent2 from "src/components/organism/TableComp2";

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
  return {
    ["Date"]: "HD787",
    ["#"]: "HD787",
    ["in"]: "HD787",
    ["Out"]: "HD787",
    ["Job"]: "HD787",

  };
});

export default function SelfAttendance() {
  const [rowSelection, setRowSelection] = React.useState({});
  // const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "Date",
      cell: (info) => info.getValue(),
      header: () => (
        <span >
          Date
        </span>
      )
    },
    {
      accessorKey: "#",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          #
        </span>
      )
    },
    {
      header: "Check",
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: "In",
          cell: (info) => info.getValue(),
          header: () => (
            <span >
              In
            </span>
          )
        },
        {
          accessorKey: "Out",
          cell: (info) => info.getValue(),
          header: () => (
            <span>
              Out
            </span>
          )
        },
      ]
    },
    {
      accessorKey: "Job",
      cell: (info) => info.getValue(),
      header: () => (
        <span >
          Job
        </span>
      )
    },
  ]

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
    <>
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ marginTop: '30px' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Form / Selft Attendance</Text>
      </Grid>
      <Container>
        <Text variant="h4" style={{ textAlign: 'center', fontFamily: fontFamilies.poppins, fontWeight: fontWeights.semi }}>Self Attendance</Text>
        <TableComponent2
          table={table}
          noPagination={true}
        />
        <WrapperStatus>
          <BoxContainer >
            <Box style={{ backgroundColor: '#EFE44C' }}></Box>
            <StatusText>On Going</StatusText>
          </BoxContainer>
          <BoxContainer >
            <Box style={{ backgroundColor: '#25B78A' }}></Box>
            <StatusText>Ok</StatusText>
          </BoxContainer>
          <BoxContainer >
            <Box style={{ backgroundColor: '#FF0008' }}></Box>
            <StatusText>Rejected</StatusText>
          </BoxContainer>
        </WrapperStatus>
      </Container>
    </>
  );
}