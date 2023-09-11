import { Card, Grid, Text, Toggler } from '@hudoro/neron'
import { IcEdit, IcEllipse, IcLink, IcPaper } from 'atoms/Icon'
import IcBuilding from 'atoms/Icon/IcBuilding'
import IcMoreSquare from 'atoms/Icon/IcMoreSquare'
import IcThreeUser from 'atoms/Icon/IcThreeUser'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { fontWeights } from 'utils/styles'
import { PopOver } from './styles'

const ListSurvey = () => {
  const [isShowPopover, setisShowPopover] = useState(false);

  const router = useRouter();

  const handleRedirectCreateSurvey = () => {
    return router.push("create");
  };

  return (
    <Card style={{ width: "90vw ", maxWidth: "350px", cursor: "pointer" }}>
      <Grid onClick={handleRedirectCreateSurvey} container flexDirection="column" gap={16}>
        <Grid container alignItems="center" justifyContent="space-between" gap={10}>
          <Grid container alignItems="center" gap={5} style={{ flex: 1 }}>
            <IcEllipse width={10} color="#54B435" />
            <Text variant="h4">Survey PPA</Text>
          </Grid>
          <Grid
            style={{ flex: 0, position: "relative" }}
            onMouseEnter={() => setisShowPopover(true)}
            onMouseLeave={() => setisShowPopover(false)}
          >
            <IcMoreSquare width={19} color="#141BBE" cursor={"pointer"} />
            <PopOver isShowPopover={isShowPopover}>
              <Grid container flexDirection="row" gap={10}>
                <Toggler defaultChecked />
                <Text variant="p" style={{ fontWeight: fontWeights.semi }}>
                  Aktif
                </Text>
              </Grid>
              <Grid container flexDirection="row" gap={10}>
                <IcEdit color="#008692" width={16} />
                <Text variant="p" style={{ fontWeight: fontWeights.semi }}>
                  Edit
                </Text>
              </Grid>
              <Grid container flexDirection="row" gap={10}>
                <IcPaper width={16} color="#008692" />
                <Text variant="p" style={{ fontWeight: fontWeights.semi }}>
                  Duplikat
                </Text>
              </Grid>
              <Grid container flexDirection="row" gap={10}>
                <IcLink width={16} color="#008692" />
                <Text variant="p" style={{ fontWeight: fontWeights.semi }}>
                  Salin Link
                </Text>
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
  )
}

export default ListSurvey