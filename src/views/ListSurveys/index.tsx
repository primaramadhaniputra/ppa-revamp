import { Button, Grid, Text } from "@hudoro/neron";
import ModalHooks from "molecules/Modal/ModalHooks";
import React from "react";
import ModalCreateSurvey from "./ModalCreateListSurvey";
import ListSurvey from "./ListSurvey";
import EmptyListSurveys from "./EmptyListSurveys";

const surveys = ['', '']

const ListsSurvey = () => {
  const { isOpenModal, handleCloseModal, handleOpenModal } = ModalHooks();
  return (
    <>
      <ModalCreateSurvey isOpenModal={isOpenModal} onClose={handleCloseModal} />
      <Grid container alignItems="center" justifyContent="space-between" gap={10}>
        <Text variant="h3">Survey kepuasan pelanggan</Text>
        <Button
          onClick={handleOpenModal}
          style={{ borderRadius: "5px", backgroundColor: "#141bbe" }}
          variant="primary"
        >
          + Formulir Survey
        </Button>
      </Grid>
      <Grid container gap={15} style={{ marginTop: "42px" }}>
        {!surveys.length ? <EmptyListSurveys handleOpenModal={handleOpenModal} />
          :
          surveys.map((_, idx) => <ListSurvey key={idx} />)
        }
      </Grid>
    </>
  );
};

export default ListsSurvey;
