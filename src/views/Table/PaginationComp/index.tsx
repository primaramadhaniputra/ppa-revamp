import { Grid, Pagination, Text } from '@hudoro/neron'
import React from 'react'

export default function PaginationComp() {
   return (
      <Grid container
         alignItems='center' justifyContent='space-between'
         style={{ marginTop: '20px', marginLeft: '20px' }}
         gap={20}
      >
         <Text variant='p'>Showing 1 to 10 of 1500</Text>
         <Pagination numberOfPages={100} currentPage={10} />
      </Grid>
   )
}
