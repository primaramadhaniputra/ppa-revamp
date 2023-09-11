import { Button, Grid, Text } from "@hudoro/neron";
import ModalHooks from "molecules/Modal/ModalHooks";
import React, { useEffect, useState } from "react";
import ModalCreateSurvey from "./ModalCreateListSurvey";
import ListSurvey from "./ListSurvey";
import EmptyListSurveys from "./EmptyListSurveys";
import { getListSurveys } from "services/listSurvey";

export interface IListsSurveys {
  createdAt: number
  description: string
  id: string
  isActive: boolean
  season: null | string | undefined
  slug: string
  title: string
  updatedAt: string

}

const ListSurveys = () => {
  const { isOpenModal, handleCloseModal, handleOpenModal } = ModalHooks();
  const [listDataSurvyes, setListDataSurvyes] = useState<IListsSurveys[]>([])

  const handleGetListsSurvyes = async () => {
    try {
      const response = await getListSurveys({})
      setListDataSurvyes(response.data.data)
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
        {!listDataSurvyes.length ? <EmptyListSurveys handleOpenModal={handleOpenModal} />
          :
          listDataSurvyes.map((item, idx) => <ListSurvey surveyData={item} key={idx} />)
        }
      </Grid>
    </>
  );
};

export default ListSurveys;
