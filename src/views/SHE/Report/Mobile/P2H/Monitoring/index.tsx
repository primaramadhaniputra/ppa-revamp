import React from 'react'
import TableComponent2 from 'src/components/organism/TableComp2'
import { ArrowDown, ArrowUp, IconContainer, IconText, ThItemContainer, Wrapper } from './styles'
import {
   ColumnDef,
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   useReactTable,
   SortingState,
   getSortedRowModel,
} from "@tanstack/react-table";
import { Card, Grid, Icon, Text } from '@hudoro/neron'
import Image from 'next/image';
import { fontWeights } from 'utils/styles';

interface IProps {
   [x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
   return {
      Tanggal: "Dani ganteng",
      Unit: "Dani ganteng",
      ["Operator"]: "Dani ganteng",
      Shift: "0",
      P2H: "Dani ganteng",
      Approver: "Dani ganteng",
      ["Status APPR"]: "Dani ganteng",
   };
});

export default function Monitoring() {

   const objTitle = Object.keys(defaultDataTable.map(item => item)[0])
   const [rowSelection, setRowSelection] = React.useState({});
   // const [globalFilter, setGlobalFilter] = React.useState("");
   const [sorting, setSorting] = React.useState<SortingState>([]);

   const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
      return {
         accessorKey: item,
         cell: (info) => {
            return <>
               {info.column.id === "Status APPR" ?
                  <Grid container justifyContent='center'>
                     <Icon iconName='IcEye' style={{ cursor: 'pointer' }} />
                  </Grid>
                  :
                  info.getValue()}
            </>
         },
         header: (data) => {
            return (
               <ThItemContainer key={index} style={{ width: '100%', justifyContent: 'space-around' }}>
                  {
                     data.header.id === 'Detail' ?
                        <span>
                           {item}
                        </span> :
                        <>
                           <span>
                              {item}
                           </span>
                           <Grid container flexDirection="column">
                              <ArrowUp></ArrowUp>
                              <ArrowDown></ArrowDown>
                           </Grid>
                        </>
                  }
               </ThItemContainer>
            )
         }
      }
   });
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
      <Wrapper>
         <IconContainer>
            <Grid>
               <Card style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, .15)', width: '100%', borderBottom: '3px solid #F89F5F', padding: '10px 20px' }}>
                  <Grid container gap={20} justifyContent="space-between">
                     <Grid container flexDirection='column' gap={10}>
                        <IconText>Turn Over</IconText>
                        <Text variant='h4' style={{ fontWeight: fontWeights.bold }}>699 Unit</Text>
                     </Grid>
                     <Image src='/icons/ua.png' width={24} height={12} />
                  </Grid>
               </Card>
            </Grid>
            <Grid>
               <Card style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, .15)', width: '100%', borderBottom: '3px solid #016CE2', padding: '10px 20px' }}>
                  <Grid container gap={20} justifyContent="space-between">
                     <Grid container flexDirection='column' gap={10}>
                        <IconText>Check In</IconText>
                        <Text variant='h4' style={{ fontWeight: fontWeights.bold }}>699 Unit</Text>
                     </Grid>
                     <Image src='/icons/ua.png' width={24} height={12} />
                  </Grid>
               </Card>
            </Grid>
            <Grid>
               <Card style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, .15)', width: '100%', borderBottom: '3px solid #451394', padding: '10px 20px' }}>
                  <Grid container gap={20} justifyContent="space-between">
                     <Grid container flexDirection='column' gap={10}>
                        <IconText>P2H</IconText>
                        <Text variant='h4' style={{ fontWeight: fontWeights.bold }}>699 Unit</Text>
                     </Grid>
                     <Image src='/icons/ua.png' width={24} height={12} />
                  </Grid>
               </Card>
            </Grid>
            <Grid>
               <Card style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, .15)', width: '100%', borderBottom: '3px solid #E82A35', padding: '10px 20px' }}>
                  <Grid container gap={20} justifyContent="space-between">
                     <Grid container flexDirection='column' gap={10}>
                        <IconText>Need P2H</IconText>
                        <Text variant='h4' style={{ fontWeight: fontWeights.bold }}>699 Unit</Text>
                     </Grid>
                     <Image src='/icons/ua.png' width={24} height={12} />
                  </Grid>
               </Card>
            </Grid>
            <Grid>
               <Card style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, .15)', width: '100%', borderBottom: '3px solid #6FB43F', padding: '10px 20px' }}>
                  <Grid container gap={20} justifyContent="space-between">
                     <Grid container flexDirection='column' gap={10}>
                        <IconText>Need Approve</IconText>
                        <Text variant='h4' style={{ fontWeight: fontWeights.bold }}>699 Unit</Text>
                     </Grid>
                     <Image src='/icons/ua.png' width={24} height={12} />
                  </Grid>
               </Card>
            </Grid>
            <Grid>
               <Card style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, .15)', width: '100%', borderBottom: '3px solid #F49E00', padding: '10px 20px' }}>
                  <Grid container gap={20} justifyContent="space-between">
                     <Grid container flexDirection='column' gap={10}>
                        <IconText>Approved</IconText>
                        <Text variant='h4' style={{ fontWeight: fontWeights.bold }}>699 Unit</Text>
                     </Grid>
                     <Image src='/icons/MTTR.png' width={24} height={12} />
                  </Grid>
               </Card>
            </Grid>
         </IconContainer>
         <TableComponent2
            table={table}
         />
      </Wrapper>
   )
}
