import { fontFamilies, Grid, Text } from '@hudoro/neron'
import React from 'react'
import TableComponent2 from 'src/components/organism/TableComp2'
import { fontWeights } from 'utils/styles'
import TopFilter from '../TopFilter'

import {
   ColumnDef,
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   useReactTable,
   // SortingState,
   getSortedRowModel,
} from "@tanstack/react-table";
import { ThItemContainer } from '../styles'
import { ArrowDown, ArrowUp } from '../Department/Detail/styles'

interface Person {
   [x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
   return {
      Bulan: "Januari 2021",
      MP: "123",
      D: `12`,
      N: `12`,
      T: "12",
      IO: "12",
      NC: "12",
      L: "12",
      O: "12",
      S: "12",
      I: "12",
      A: "12",
      K: "12",
      P: "12",
      R: "12",
      H: "12",
      NR: "12",
      TOTAL: "12",
      ATR: "12",
   };
});

export default function YTD() {
   const [rowSelection, setRowSelection] = React.useState({});
   const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
   const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
      return {
         accessorKey: item,
         cell: (info) => {
            return (
               <span style={{ fontWeight: info.column.id === 'Bulan' || info.column.id === 'ATR' ? fontWeights.bold : fontWeights.regular }}>
                  {info.getValue()}
               </span>
            )
         },
         header: () => (
            <ThItemContainer key={index}>
               <span>
                  {item}
               </span>
               <Grid container flexDirection="column">
                  <ArrowUp></ArrowUp>
                  <ArrowDown></ArrowDown>
               </Grid>
            </ThItemContainer>
         ),
         footer: (info) => {
            return <span style={{ fontWeight: fontWeights.bold, fontFamily: fontFamilies.poppins }}>{info.column.id === 'Dept' ? 'Total' : '123'}</span>
         },
      }
   });
   const table = useReactTable({
      data: defaultDataTable,
      columns,
      state: {
         rowSelection,
      },
      onRowSelectionChange: setRowSelection,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      debugTable: true,
      getSortedRowModel: getSortedRowModel(),
   });
   return (
      <>
         <Text variant="h4" style={{ margin: '30px 0', textAlign: 'center', fontWeight: fontWeights.semi }}>YTD Personel</Text>
         <TopFilter noDept={true} noDate={true} doubleSelect={true} withYear={true} />
         <TableComponent2 table={table} noPagination={true} withFooter={true} />
      </>
   )
}
