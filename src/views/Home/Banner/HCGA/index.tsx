import { Grid } from '@hudoro/neron'
import TitlePage from 'atoms/TitlePage'
import React from 'react'
import { fontSizing, fontWeights } from 'utils/styles'
import DoughnutChart from './DoughnutChart'
import LineChart from './LineChart'
import PieChart from './PieChart'

export default function HCGA() {
   const data = {
      labels: ["ENG", "FLO", "HCG", "PAC", 'PLT', 'PRO', "SHE"],
      datasets: [
         {
            label: "# of Votes",
            data: [12, 19, 3, 5, 7, 8, 9],
            backgroundColor: ["#0496FF", "#00E396", "#FEB019", "#546E7A", '#FF4560', "#775DD0", '#00A859'],
            borderColor: ["#0496FF", "#00E396", "#FEB019", "#546E7A", '#FF4560', "#775DD0", '#00A859'],
            borderWidth: 1,
         },
      ],
   };
   return (
      <>
         <Grid style={{ margin: "50px 0 30px" }} container alignItems="center" justifyContent="space-between" >
            <TitlePage type="h4" styles={{ fontSize: fontSizing.md.fontSize, fontWeight: fontWeights.bold }} >
               HCGA
            </TitlePage>
         </Grid>
         <Grid container gap={10}>
            <Grid>
               <DoughnutChart data={data} />
            </Grid>
            <Grid>
               <PieChart data={data} />
            </Grid>
            <Grid>
               <LineChart />
            </Grid>
         </Grid>
      </>
   )
}