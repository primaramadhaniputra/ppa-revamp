import React from 'react'
import TableComponent2 from 'src/components/organism/TableComp2'
import SecondFilter from '../SecondFilter'
import { Container, TextInfo, Wrapper } from './styles'
import {
   ColumnDef,
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   useReactTable,
   SortingState,
   getSortedRowModel,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ThItemContainer } from '../styles';
import { Grid, Text } from '@hudoro/neron';
import { fontSizing, fontWeights } from 'utils/styles';

interface IProps {
   [x: string]: any;
}

const arr = new Array(3).fill(0);
export const defaultDataTable = arr.map((_, index) => {
   return {
      NRP: "HD787",
      Nama: "Hd123",
      Posisi: `33${index}`,
      Dept: "2022-17-08",
      ["Tanggal Induksi"]: "2022-17-08",
   };
});


export default function JadwalInduksi() {
   const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
   const [rowSelection, setRowSelection] = React.useState({});
   const [globalFilter, setGlobalFilter] = React.useState("");
   const [sorting, setSorting] = React.useState<SortingState>([]);

   const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
      return {
         accessorKey: item,
         cell: (info) => info.getValue(),
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
         )
      }
   });
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
      <Wrapper>
         <Container >
            <Text variant='h4' style={{ fontWeight: fontWeights.bold, display: 'flex', alignItems: 'center', fontSize: fontSizing.xl.fontSize }} >Jadwal Induksi</Text>
            <TextInfo>24 orang</TextInfo>
         </Container>
         <SecondFilter table={table} handleChangeTotalShowData={handleChangeTotalShowData} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
         <TableComponent2
            table={table}
         />
      </Wrapper >
   )
}
