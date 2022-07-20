import React, { useState } from "react";
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
import SearchingForm from "src/components/organism/SearchingForm";
import { Grid } from "@hudoro/neron";
import { ArrowDown, ArrowUp } from "../styles";

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
  const systemTypeValue = useSystemTypeValue();
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "Tanggal",
      cell: (info) => info.getValue(),
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Tanggal
          </span>
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
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
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
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
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
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
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
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
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
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
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
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
          <Grid>
            <ArrowUp></ArrowUp>
            <ArrowDown></ArrowDown>
          </Grid>
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

  return (
    <>
      <Grid style={{ maxWidth: "300px" }}>
        <SearchingForm
          title="Menu"
          placeholder="Device / Production / Payload"
          isMenu={false}
          isDate={true}
          isShift={false}
          // dropDownData={data}
          // dropDownDefaultvalue={defaultValue}
          // onChangeDropdownMenu={handleChangeOperation}
          // onSearchDate={handleSearchOperationReportDate}
          calendarState={state}
          setCalendarState={setState}
        />
      </Grid>
      <TableComponent
        table={table}
        type={systemTypeValue}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        filterBottom={false}
        noButton={true}
      />
    </>
  );
}
