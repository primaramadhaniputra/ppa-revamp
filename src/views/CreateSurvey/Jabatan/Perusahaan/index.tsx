import { Button, Grid, Text } from '@hudoro/neron'
import React from 'react'
import { PerusahaanContainer } from './styles'

const perusahaans = [
  {
    id: 1,
    label: 'MHU'
  },
  {
    id: 2,
    label: 'BA'
  },
  {
    id: 1,
    label: 'PPA'
  },
  {
    id: 1,
    label: 'ASM'
  },
]

const Perusahaan = () => {
  return (
    <PerusahaanContainer>
      <Text variant="p" style={{ fontWeight: "600", borderBottom: '1px solid #ddd', padding: "0 10px 10px 10px " }}>Perusahaan</Text>
      <Grid container flexDirection='column' style={{ padding: "0 10px 10px 10px " }}>
        {
          perusahaans.map((item, idx) => {
            return (
              <Button key={idx} variant="ghost" style={{ textAlign: "left", color: "black" }}>{item.label}</Button>
            )
          })
        }
      </Grid>
    </PerusahaanContainer>
  )
}

export default Perusahaan