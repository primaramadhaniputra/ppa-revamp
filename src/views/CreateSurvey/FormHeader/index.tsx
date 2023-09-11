import { Grid } from '@hudoro/neron'
import React, { useState } from 'react'
import { StyledInput, StyledText, StyledTextArea } from '../styles'
import { IcEdit, IcInfo } from 'atoms/Icon'
import Toggle from 'atoms/Toggle'

const dataType = ["Internal", "Eksternal"];


const FormHeader = () => {
  const [title, setTitle] = useState(" ");
  const [deskripsi, setDeskripsi] = useState(" ");
  return (
    <>
      <Grid container alignItems="center" gap={5} style={{ width: "100%", padding: "0 16px" }}>
        <StyledInput
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: `${title.length}ch`,
            minWidth: "120px",
            maxWidth: "250px",
            fontSize: "36px",
            fontWeight: "bold",
          }}
          placeholder="TITLE..."
        />
        <IcEdit width={16} color="#55b434" />
      </Grid>
      <Grid
        container
        alignItems="center"
        gap={5}
        style={{ backgroundColor: "#E0F7FC ", width: "100%", padding: "8px 16px" }}
      >
        <StyledTextArea
          onChange={(e) => setDeskripsi(e.target.value)}
          style={{ width: `${deskripsi.length}ch` }}
          placeholder="Survey Deskripsi..."
        />
        <IcEdit width={16} color="#55b434" />
      </Grid>
      <Grid container gap={8} flexDirection="column" style={{ padding: "0 16px" }}>
        {dataType.map((item, idx) => {
          return (
            <Grid key={idx} container alignItems="center">
              <Grid container gap={2} style={{ width: "90px" }}>
                <StyledText variant="p">{item}</StyledText>
                <Grid container title={item}>
                  <IcInfo width={10} color="#008692" />
                </Grid>
              </Grid>
              <Toggle id={item} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default FormHeader