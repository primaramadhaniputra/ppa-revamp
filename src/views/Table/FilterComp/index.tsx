import { Grid } from '@hudoro/neron'
import LabeledInput from 'atoms/LabeledInput'
import React from 'react'

export default function FilterComp() {
   return (
      <Grid container gap={40} style={{ marginTop: '40px', marginLeft: '20px' }}>
         <Grid container flexDirection='column' gap={5}>
            <LabeledInput name='asdf' title='asdf' style={{ maxWidth: '104px' }} />
         </Grid>
         <Grid container flexDirection='column' gap={5}>
            <LabeledInput name='asdf' title='asdf' style={{ maxWidth: '104px' }} />
         </Grid>
         <Grid container flexDirection='column' gap={5}>
            <LabeledInput name='asdf' title='asdf' style={{ maxWidth: '104px' }} />
         </Grid>
         <Grid container flexDirection='column' gap={5}>
            <LabeledInput name='asdf' title='asdf' style={{ maxWidth: '104px' }} />
         </Grid>
         <Grid container flexDirection='column' gap={5}>
            <LabeledInput name='asdf' title='asdf' style={{ maxWidth: '104px' }} />
         </Grid>
         <Grid container flexDirection='column' gap={5}>
            <LabeledInput name='asdf' title='asdf' style={{ maxWidth: '104px' }} />
         </Grid>
      </Grid>
   )
}
