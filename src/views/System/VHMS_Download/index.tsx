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
import Pagination from "src/components/organism/Pagination";
// import DoughnutChart from "atoms/DoughnutChart";

interface Person {
  [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    Model: "HD787",
    CN: "Hd123",
    SN: `33${index}`,
    ["Last Download"]: "2022-17-08",
    ["Last Operation"]: "2022-17-08",
    ["Pldcycn Record"]: "2022-17-08 02:12:12",
    ["Trend Record"]: "2022-17-08 02:12:12",
    ["Fault Record"]: "2022-17-08 02:12:12",
    ["Machine History"]: "2022-17-08 02:12:12",
  };
});

export default function VHMS_Download() {
  const systemTypeValue = useSystemTypeValue();
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "Model",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          Model
          <span style={{ display: "inline-block", transform: "rotate(90deg)" }}>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.CN,
      id: "CN",
      cell: (info) => info.getValue(),
      header: () => (
        <span>
          CN
          <span style={{ display: "inline-block", transform: "rotate(90deg)" }}>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "SN",
      header: () => (
        <span>
          SN
          <span style={{ display: "inline-block", transform: "rotate(90deg)" }}>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },

    {
      accessorKey: "Last Download",
      header: () => (
        <span>
          Last Download
          <span style={{ display: "inline-block", transform: "rotate(90deg)" }}>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "Last Operation",
      header: () => (
        <span>
          Last Operation
          <span style={{ display: "inline-block", transform: "rotate(90deg)" }}>
            {"<>"}
          </span>
        </span>
      ),
      footer: (props) => props.column.id,
    },
    {
      header: "Info",
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: "Pldcycn Record",
          header: () => (
            <span>
              Pldcycn Record
              <span
                style={{ display: "inline-block", transform: "rotate(90deg)" }}
              >
                {"<>"}
              </span>
            </span>
          ),
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "Trend Record",
          header: () => (
            <span>
              Trend Record
              <span
                style={{ display: "inline-block", transform: "rotate(90deg)" }}
              >
                {"<>"}
              </span>
            </span>
          ),
          footer: (props) => props.column.id,
          cell: (info) => <span>{info.getValue()}</span>,
          enableColumnFilter: false,
        },
        {
          accessorKey: "Fault Record",
          header: () => (
            <span>
              Fault Record
              <span
                style={{ display: "inline-block", transform: "rotate(90deg)" }}
              >
                {"<>"}
              </span>
            </span>
          ),
          footer: (props) => props.column.id,
          cell: (info) => <span>{info.getValue()}</span>,
          enableColumnFilter: false,
        },
        {
          accessorKey: "Machine History",
          header: () => (
            <span>
              Machine History
              <span
                style={{ display: "inline-block", transform: "rotate(90deg)" }}
              >
                {"<>"}
              </span>
            </span>
          ),
          footer: (props) => props.column.id,
        },
      ],
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
      <Pagination />
      <TableComponent
        table={table}
        type={systemTypeValue}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        filterBottom={false}
      />
      {/* <DoughnutChart /> */}
    </>
  );
}
