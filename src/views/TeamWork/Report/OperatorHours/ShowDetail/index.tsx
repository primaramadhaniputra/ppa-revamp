import { Grid, Icon } from '@hudoro/neron'
import React from 'react'
import { Container, DataContainer, StyledP, Table, Title, Wrapper } from './styles'

interface IProps {
   onclick: () => void
}

export default function ShowDetail({ onclick }: IProps) {
   return (
      <Wrapper>
         <Container>
            <Grid container justifyContent='space-between' alignItems='center' style={{ marginBottom: 30 }}>
               <Title >
                  Riwayat Pelanggaran
               </Title>
               <Icon iconName='IcClose' style={{ cursor: 'pointer' }} onClick={onclick} />
            </Grid>
            <Grid container gap={20}>
               <DataContainer style={{ flexDirection: 'column', width: '100%' }} >
                  <StyledP>13040438 - MARTINUS NAPA</StyledP>
                  <Table>
                     <thead>
                        <tr>
                           <th>No</th>
                           <th>Date</th>
                           <th>Sanksi</th>
                           <th>Jenis</th>
                           <th>Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>cell1_1</td>
                           <td>cell2_1</td>
                           <td>cell3_1</td>
                           <td>cell4_1</td>
                           <td>cell5_1</td>
                        </tr>
                     </tbody>
                  </Table>
               </DataContainer>
            </Grid>

         </Container>
      </Wrapper >
   )
}
