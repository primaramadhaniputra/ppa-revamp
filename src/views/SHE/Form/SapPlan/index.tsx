import { Grid, Text } from '@hudoro/neron'
import React from 'react'
import { fontWeights } from 'utils/styles'
import Table from './Table'

export default function SapPlan() {
   return (
      <>
         <Grid style={{ flex: 1, marginTop: '30px' }} >
            <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >SHE / Form / SAP Plan</Text>
         </Grid>
         <Table />
      </>
   )
}
