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

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    ID: "HD787",
    User: "Hd123",
    Host: `33${index}`,
    DB: "2022-17-08",
    Command: "2022-17-08",
    Time: "2022-17-08 02:12:12",
    State: "2022-17-08 02:12:12",
    Info: "2022-17-08 02:12:12",
    Action: "2022-17-08 02:12:12",
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
      accessorKey: "ID",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          ID
          <span>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.CN,
      id: "User",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          User
          <span>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Host",
      header: () => (
        <span>
          Host
          <span>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "DB",
      header: () => (
        <span>
          DB
          <span>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Command",
      header: () => (
        <span>
          Command
          <span>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Time",
      header: () => (
        <span>
          Time(min)
          <span
          >
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "State",
      header: () => (
        <span>
          State
          <span>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
      cell: (info) => <span>{info.getValue()}</span>,
      enableColumnFilter: false,
    },
    {
      accessorKey: "Info",
      header: () => (
        <span>
          Info
          <span>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
      cell: (info) => <span>{info.getValue()}</span>,
      enableColumnFilter: false,
    },
    {
      accessorKey: "Action",
      header: () => (
        <span>
          Action
          <span>
            {"<>"}
          </span>
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
    <>
      <Grid style={{ maxWidth: '300px' }}>
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
