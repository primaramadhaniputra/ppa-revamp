import React from "react";
import TableComponent from "src/components/organism/TableComp";
import DoughnutChart from "atoms/DoughnutChart";
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
import { ArrowDown, ArrowUp } from "../styles";
import { Grid } from "@hudoro/neron";

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

export default function VHMSDownload() {
  const systemTypeValue = useSystemTypeValue();
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "Model",
      cell: (info) => info.getValue(),
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Model
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
      accessorFn: (row) => row.CN,
      id: "CN",
      cell: (info) => info.getValue(),
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            CN
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
      accessorKey: "SN",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            SN
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
      accessorKey: "Last Download",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Last Download
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
      accessorKey: "Last Operation",
      header: () => (
        <Grid container alignItems="center" gap={7}>
          <span>
            Last Operation
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
      header: "VHMS Latest",
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: "Pldcycn Record",
          header: () => (
            <Grid container alignItems="center" gap={7}>
              <span>
                Pldcycn Record
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
          accessorKey: "Trend Record",
          header: () => (
            <Grid container alignItems="center" gap={7}>
              <span>
                Trend Record
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
        {
          accessorKey: "Fault Record",
          header: () => (
            <Grid container alignItems="center" gap={7}>
              <span>
                Fault Record
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
        {
          accessorKey: "Machine History",
          header: () => (
            <Grid container alignItems="center" gap={7}>
              <span>
                Machine History
              </span>
              <Grid>
                <ArrowUp></ArrowUp>
                <ArrowDown></ArrowDown>
              </Grid>
            </Grid>
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
    sortDescFirst: true
  });

  return (
    <>
      <TableComponent
        table={table}
        type={systemTypeValue}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        filterBottom={false}
      />
      <DoughnutChart />
    </>
  );
}
