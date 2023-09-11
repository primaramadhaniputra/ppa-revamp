import { Button, Grid, Input } from '@hudoro/neron'
import Modal from 'molecules/Modal'
import React from 'react'

interface IProps {
  isOpenModal: boolean,
  onClose: () => void
}

const ModalCreateSurvey = ({ onClose, isOpenModal }: IProps) => {
  return (
    <Modal onClose={onClose} isShow={isOpenModal} title="Formulir Baru">
      <Grid
        container
        flexDirection="column"
        gap={32}
        style={{ width: "80vw", maxWidth: "450px", padding: "20px" }}
      >
        <Input label="Nama Formulir *" style={{ borderRadius: "3px" }} />
        <Button
          style={{ borderRadius: "5px", backgroundColor: "#141bbe" }}
          variant="primary"
        >
          Buat Formulir
        </Button>
      </Grid>
    </Modal>
  )
}

export default ModalCreateSurvey