import { Button, Grid, Input, Text, Toggler } from "@hudoro/neron";
import Card from "atoms/Card";
import { IcEdit, IcEllipse, IcLink, IcPaper } from "atoms/Icon";
import IcBuilding from "atoms/Icon/IcBuilding";
import IcMoreSquare from "atoms/Icon/IcMoreSquare";
import IcThreeUser from "atoms/Icon/IcThreeUser";
import Modal from "molecules/Modal";
import ModalHooks from "molecules/Modal/ModalHooks";
import React, { useState } from "react";
import { fontWeights } from "utils/styles";
import { PopOver } from "./styles";

const CreateSurveyPage = () => {
  const { isOpenModal, handleCloseModal, handleOpenModal } = ModalHooks()
  const [isShowPopover, setisShowPopover] = useState(false)

  return <div>
    <Modal onClose={handleCloseModal} isShow={isOpenModal} title="Formulir Baru" >
      <Grid container flexDirection="column" gap={32} style={{ width: "80vw", maxWidth: "450px" }}>
        <Input label="Nama Formulir *" style={{ borderRadius: "3px" }} />
        <Button variant="primary" style={{ borderRadius: "5px" }}>Buat Formulir </Button>
      </Grid>
    </Modal>
    <Grid container alignItems="center" justifyContent="space-between" gap={10}>
      <Text variant="h3">Survey kepuasan pelanggan</Text>
      <Button variant="primary">+ Formulir Survey</Button>
    </Grid>
    <Grid style={{ marginTop: "42px" }}>
      <Card style={{ width: "90vw ", maxWidth: "350px" }} >
        <Grid container flexDirection="column" gap={16} >
          <Grid container alignItems="center" justifyContent="space-between" gap={10}>
            <Grid container alignItems="center" gap={5} style={{ flex: 1 }} >
              <IcEllipse width={10} color="#54B435" />
              <Text variant="h4">Survey PPA</Text>
            </Grid>
            <Grid style={{ flex: 0, position: "relative" }} onMouseEnter={() => setisShowPopover(true)} onMouseLeave={() => setisShowPopover(false)} >
              <IcMoreSquare width={19} color="#141BBE" cursor={'pointer'} />
              <PopOver isShowPopover={isShowPopover}>
                <Grid container flexDirection="row" gap={10}>
                  <Toggler defaultChecked />
                  <Text variant="p" style={{ fontWeight: fontWeights.semi }}>Aktif</Text>
                </Grid>
                <Grid container flexDirection="row" gap={10}>
                  <IcEdit color="#008692" width={16} />
                  <Text variant="p" style={{ fontWeight: fontWeights.semi }}>Edit</Text>
                </Grid>
                <Grid container flexDirection="row" gap={10}>
                  <IcPaper width={16} color="#008692" />
                  <Text variant="p" style={{ fontWeight: fontWeights.semi }}>Duplikat</Text>
                </Grid>
                <Grid container flexDirection="row" gap={10}>
                  <IcLink width={16} color="#008692" />
                  <Text variant="p" style={{ fontWeight: fontWeights.semi }}>Salin Link</Text>
                </Grid>
              </PopOver>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" gap={10}>
            <Grid container alignItems="center" gap={6}>
              <IcThreeUser width={20} color="#CECFE7" />
              <Text variant="p">Internal</Text>
            </Grid>
            <Grid container alignItems="center" gap={6}>
              <IcBuilding width={20} color="#CECFE7" />
              <Text variant="p">3 Perusahaan</Text>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Text variant="mute">Update 21-07-2023 </Text>
          </Grid>
        </Grid>
      </Card>
    </Grid>
    {/* <Card style={{ margin: "auto", width: "max-content", marginTop: "100px", maxWidth: '600px', textAlign: 'center' }}>
      <Grid container flexDirection="column" alignItems="center" gap={28}>
        <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
          <circle cx="54" cy="54" r="54" fill="#D9F0F8" />
          <g filter="url(#filter0_ii_3206_6561)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M82.1714 83H31.1786H27.8071C25.1086 83 22.6296 82.0607 20.679 80.4911C13.1544 76.6612 8 68.8433 8 59.8214C8 47.0203 18.3774 36.6429 31.1786 36.6429C32.7038 36.6429 34.1945 36.7902 35.6374 37.0713C40.4563 29.2295 49.1139 24 58.9929 24C72.3783 24 83.5214 33.6007 85.9116 46.2917C94.3597 48.0219 100.714 55.4974 100.714 64.4571C100.714 74.0451 93.4373 81.9334 84.1051 82.9004C83.6104 82.9661 83.1056 83 82.5929 83H82.1714Z" fill="#F9FBFF" />
          </g>
          <defs>
            <filter id="filter0_ii_3206_6561" x="4" y="22" width="99.7143" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="3" dy="5" />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.756863 0 0 0 0 0.843137 0 0 0 0.8 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3206_6561" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-4" dy="-2" />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0" />
              <feBlend mode="normal" in2="effect1_innerShadow_3206_6561" result="effect2_innerShadow_3206_6561" />
            </filter>
          </defs>
        </svg>
        <Text variant="h4" style={{ fontWeight: fontWeights.medium }}>Buat formulir survey anda</Text>
        <Text variant="p" style={{ fontWeight: fontWeights.medium }}>
          Belum ada formulir survey anda untuk disebar. Gunakan tombol dibawah ini untuk membuat formulir baru.
        </Text>
        <Button onClick={() => handleOpenModal()} variant="primary" style={{ borderRadius: "5px" }}>Buat Formulir Baru</Button>
      </Grid>
    </Card> */}
  </div>
};

export default CreateSurveyPage;
