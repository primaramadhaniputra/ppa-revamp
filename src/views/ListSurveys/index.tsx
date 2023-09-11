import { Button, Grid, Text } from "@hudoro/neron";
import ModalHooks from "molecules/Modal/ModalHooks";
import React, { useEffect } from "react";
import ModalCreateSurvey from "./ModalCreateListSurvey";
import ListSurvey from "./ListSurvey";
import EmptyListSurveys from "./EmptyListSurveys";
import { getListSurveys } from "services/listSurvey";

const surveys = ['', '']

const ListSurveys = () => {
  const { isOpenModal, handleCloseModal, handleOpenModal } = ModalHooks();

  const handleGetListsSurvyes = async () => {
    try {
      const response = await getListSurveys({})
      console.log('response', response)
    } catch (error) {

    }
  }

  useEffect(() => {
    handleGetListsSurvyes()
  }, [])

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

export default ListSurveys;
