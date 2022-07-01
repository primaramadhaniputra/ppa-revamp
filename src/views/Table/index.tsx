import { Card, Grid, Pagination, Text } from '@hudoro/neron'
import React from 'react'
import Layout from 'src/components/layouts/Dashboard/layout'
import FilterComp from './FilterComp'
import InputComp from './InputComp'
import { Wrapper } from './styles'
import TableComp from './TableComp'

export default function Table() {


   return (
      <Layout title='Operation / Report'>
         <Wrapper style={{ marginTop: '50px' }}>
            <Card>
               <InputComp />
               <TableComp />
               <FilterComp />
               <Grid container
                  alignItems='center' justifyContent='space-between'
                  style={{ marginTop: '20px', marginLeft: '20px' }}
                  gap={20}
               >
                  <Text variant='p'>Showing 1 to 10 of 1500</Text>
                  <Pagination numberOfPages={100} currentPage={10} />
               </Grid>
            </Card>
         </Wrapper>
      </Layout >
   )
}
