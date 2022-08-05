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
import { Grid } from "@hudoro/neron";
import { Container } from "./styles";
import TableComponent2 from "src/components/organism/TableComp2";
import TopFilter from "./TopFilter";
import TableFilterSearch from "src/components/organism/TableFilterSearch";

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    Tanggal: "HD787",
    NRP: "Hd123",
    Nama: `33${index}`,
    Posisi: "2022-17-08",
    Status: "2022-17-08",
    Time: "2022-17-08 02:12:12",
    Mac: "2022-17-08 02:12:12",
  };
});

export default function DeviceMonitoring() {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "Tanggal",
      cell: (info) => info.getValue(),
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Tanggal
          </span>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.NRP,
      id: "NRP",
      cell: (info) => info.getValue(),
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            NRP
          </span>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Nama",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Nama
          </span>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Posisi",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Posisi
          </span>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Status",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Status
          </span>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Time",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Time
          </span>
        </Grid>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Mac",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Mac
          </span>
        </Grid>
      ),
      footer: (props) => props.column.id,
      cell: (info) => <span>{info.getValue()}</span>,
      enableColumnFilter: false,
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
      <TopFilter />
      <TableFilterSearch table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} withButton={false} buttonTitle='EXPORT' />
      <TableComponent2
        table={table}
      />
    </Container>
  );
}
