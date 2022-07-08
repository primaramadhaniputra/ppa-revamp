import { Lozenge } from '@hudoro/neron'
import React, { ReactNode } from 'react'
import { TABLE, Wrapper } from './styles'

import {
   Column,
   ColumnDef,
   flexRender,
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   Table,
   useReactTable,
} from '@tanstack/react-table'
import LabeledInput from 'atoms/LabeledInput'
import PaginationComp from '../PaginationComp'

// filter table di atas

type Person = {
   [x: string]: any
}

const defaultData: Person[] = [
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linsley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
   {
      NRP: '12345678',
      Nama: 'linasley',
      Perusahaan: 'PT PO',
      Dept: 'Naruto',
      Jabatan: 'Hokage ke 7',
      Posisi: 'Sayap Kanan',
      Achievment: '45.5%',
      aksi: '...'
   },
]


export default function TableComp() {

   const [rowSelection, setRowSelection] = React.useState({})
   const columns: ColumnDef<Person>[] = [

      {
         accessorKey: 'NRP',
         cell: info => info.getValue(),
         footer: props => props.column.id,
      },
      {
         accessorFn: row => row.Nama,
         id: 'Nama',
         cell: info => info.getValue(),
         header: () => <span>Nama</span>,
         footer: props => props.column.id,
      },
      {
         accessorKey: 'Perusahaan',
         header: () => 'Perusahaan',
         footer: props => props.column.id,
      },

      {
         accessorKey: 'Dept',
         header: () => <span>Dept</span>,
         footer: props => props.column.id,
      },
      {
         accessorKey: 'Jabatan',
         header: 'Jabatan',
         footer: props => props.column.id,
      },
      {
         accessorKey: 'Posisi',
         header: 'Posisi',
         footer: props => props.column.id,
      },
      {
         accessorKey: 'Achievment',
         header: 'Achievment',
         footer: props => props.column.id,
         cell: info => <Lozenge label={info.getValue()} variant='danger-strong' />,
         enableColumnFilter: false
      },
      {
         accessorKey: 'aksi',
         header: 'aksi',
         footer: props => props.column.id,
         cell: info => <span onClick={() => alert('oke')} style={{ cursor: "pointer" }}>{info.getValue()}</span>,
         enableColumnFilter: false,

      },

   ]

   const table = useReactTable({
      data: defaultData,
      columns,
      state: {
         rowSelection,
      },
      onRowSelectionChange: setRowSelection,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      debugTable: true,
   })
   return (
      <>
         <Wrapper>
            <div>
            </div>
            <TABLE className="paleBlueRows">
               <thead>
                  {table.getHeaderGroups().map(headerGroup => (
                     <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                           <th key={header.id} colSpan={header.colSpan}>
                              {header.isPlaceholder
                                 ? null
                                 : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                 )}
                           </th>
                        ))}
                     </tr>
                  ))}
               </thead>
               <tbody>
                  {table.getRowModel().rows.map(row => (
                     <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                           <td key={cell.id}>
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                           </td>
                        ))}
                     </tr>
                  ))}
               </tbody>
               <tfoot>
                  {table.getHeaderGroups().map(headerGroup => (
                     <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                           const title = flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                           )
                           return (
                              header.column.getCanFilter() &&
                              <th key={header.id} colSpan={header.colSpan}>
                                 {header.isPlaceholder ? null : (
                                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                                       <div style={{ display: 'none' }}> {flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                       )}</div>
                                       {header.column.getCanFilter() ? (
                                          <div>
                                             <Filter column={header.column} table={table} title={title} />
                                          </div>
                                       ) : null}
                                    </div>
                                 )}
                              </th>
                           )
                        })}
                     </tr>
                  ))}
               </tfoot>
            </TABLE>

         </Wrapper>
         <PaginationComp dataPerPage={table.getRowModel().rows.length} totalData={table.getPreFilteredRowModel().rows.length} currentPage={table.getState().pagination.pageIndex + 1} totalPage={table.getPageCount()} nextButtonEvent={() => table.nextPage()} previousButtonEvent={() => table.previousPage()} />
      </>
   )
}

function Filter({ column, title }: { column: Column<any>; table: Table<any>, title: Element | ReactNode }) {
   // table,
   // const firstValue = table
   //    .getPreFilteredRowModel()
   //    .flatRows[0]?.getValue(column.id)

   return <LabeledInput
      name='asdf'
      style={{ width: '150px' }}
      title={title as string}
      type="text"
      value={(column.getFilterValue() ?? '') as string}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
   />
}
