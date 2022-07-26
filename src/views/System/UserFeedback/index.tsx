import React from "react";
// import TableComponent from "src/components/organism/TableComp";
// import {
//   ColumnDef,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   useReactTable,
//   SortingState,
//   getSortedRowModel,
// } from "@tanstack/react-table";
// import { useSystemTypeValue } from "recoil/SystemType/atom";
// import { Grid } from "@hudoro/neron";
// import { ArrowDown, ArrowUp } from "../styles";

// interface Person {
//   [x: string]: any;
// }

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
  return {
    Dept: "HD787",
    MP: "Hd123",
    ["New version"]: `33${index}`,
    ["Old version"]: "2022-17-08",
    Update: "2022-17-08",
  };
});

export default function UserFeedback() {
  // const systemTypeValue = useSystemTypeValue();
  // const [rowSelection, setRowSelection] = React.useState({});
  // const [globalFilter] = React.useState("");
  // const [sorting, setSorting] = React.useState<SortingState>([]);
  // const columns: ColumnDef<Person>[] = [
  //   {
  //     accessorKey: "Dept",
  //     cell: (info) => info.getValue(),
  //     header: () => (
  //       <Grid container alignItems="center" gap={7}>
  //         <span>
  //           Dept
  //         </span>
  //         <Grid>
  //           <ArrowUp></ArrowUp>
  //           <ArrowDown></ArrowDown>
  //         </Grid>
  //       </Grid>
  //     ),
  //     footer: (props) => props.column.id,
  //   },
  //   {
  //     accessorFn: (row) => row.MP,
  //     id: "MP",
  //     cell: (info) => info.getValue(),
  //     header: () => (
  //       <Grid container alignItems="center" gap={7}>
  //         <span>
  //           MP
  //         </span>
  //         <Grid>
  //           <ArrowUp></ArrowUp>
  //           <ArrowDown></ArrowDown>
  //         </Grid>
  //       </Grid>
  //     ),
  //     footer: (props) => props.column.id,
  //   },
  //   {
  //     accessorKey: "New version",
  //     header: () => (
  //       <Grid container alignItems="center" gap={7}>
  //         <span>
  //           New Version
  //         </span>
  //         <Grid>
  //           <ArrowUp></ArrowUp>
  //           <ArrowDown></ArrowDown>
  //         </Grid>
  //       </Grid>
  //     ),
  //     footer: (props) => props.column.id,
  //   },

  //   {
  //     accessorKey: "Old version",
  //     header: () => (
  //       <Grid container alignItems="center" gap={7}>
  //         <span>
  //           Old Version
  //         </span>
  //         <Grid>
  //           <ArrowUp></ArrowUp>
  //           <ArrowDown></ArrowDown>
  //         </Grid>
  //       </Grid>
  //     ),
  //     footer: (props) => props.column.id,
  //   },
  //   {
  //     accessorKey: "Update",
  //     header: () => (
  //       <Grid container alignItems="center" gap={7}>
  //         <span>
  //           Update
  //         </span>
  //         <Grid>
  //           <ArrowUp></ArrowUp>
  //           <ArrowDown></ArrowDown>
  //         </Grid>
  //       </Grid>
  //     ),
  //     footer: (props) => props.column.id,
  //   },
  // ];

  // const table = useReactTable({
  //   data: defaultDataTable,
  //   columns,
  //   state: {
  //     sorting,
  //     rowSelection,
  //     globalFilter,
  //   },
  //   onSortingChange: setSorting,
  //   onRowSelectionChange: setRowSelection,
  //   getCoreRowModel: getCoreRowModel(),
  //   getFilteredRowModel: getFilteredRowModel(),
  //   getPaginationRowModel: getPaginationRowModel(),
  //   debugTable: true,
  //   getSortedRowModel: getSortedRowModel(),
  // });

  return (
    <></>
    // <TableComponent
    //   table={table}
    //   type={systemTypeValue}
    //   globalFilter={globalFilter}
    //   setGlobalFilter={setGlobalFilter}
    //   filterBottom={false}
    //   noButton={true}
    //   noSearch={true}
    // />
  );
}
