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
import { dummyInputDropdown } from "utils/dummy";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";

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

  return (
    <>
      <Grid container alignItems="flex-end" gap={15} >
        <SearchingForm
          title="Filter"
          placeholder="Status"
          isMenu={true}
          isDate={true}
          isShift={false}
          dropDownData={dummyInputDropdown}
          // dropDownDefaultvalue={defaultValue}
          // onChangeDropdownMenu={handleChangeOperation}
          // onSearchDate={handleSearchOperationReportDate}
          calendarState={state}
          setCalendarState={setState}
        />
        <Grid style={{ flex: 1 }}>
          <StyledButton style={{ backgroundColor: colors.orange, fontWeight: fontWeights.bold, fontSize: fontSizing.lg.fontSize }}>Show</StyledButton>
        </Grid>
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
