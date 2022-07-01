import { Lozenge } from '@hudoro/neron'
import React from 'react'
import { TABLE, Wrapper } from './styles'

export default function TableComp() {
   return (
      <Wrapper>
         <TABLE className="paleBlueRows">
            <thead>
               <tr>
                  <th>NRP</th>
                  <th>Nama</th>
                  <th>Perusahaan</th>
                  <th>Dept</th>
                  <th>Jabatan</th>
                  <th>Posisi</th>
                  <th>Achievment</th>
                  <th>aksi</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>12345</td>
                  <td>matumbaman</td>
                  <td>steam</td>
                  <td>dunno</td>
                  <td>hokage</td>
                  <td>sayap kanan</td>
                  <td>
                     <Lozenge label='45.5%' variant='danger-strong' />
                  </td>
                  <td>
                     <span style={{ fontSize: '30px', cursor: "pointer" }}>...</span>
                  </td>
               </tr>
            </tbody>
         </TABLE>
      </Wrapper>
   )
}
