import React from 'react'
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { fontFamilies, Grid } from '@hudoro/neron';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
);

export const options = {
   plugins: {
      legend: {
         display: false,
      },
      datalabels: {
         color: 'white',
         font: {
            family: fontFamilies.poppins,
            size: 15
         },
         align: 'start',
         anchor: 'end',
      },
   },
   responsive: true,
   scales: {
      x: {
         stacked: true,
      },
      y: {
         stacked: true,
         ticks: {
            callback: function (val: string) {
               return `${val} %`
            },
            font: {
               size: 13,
               family: fontFamilies.poppins
            }
         }
      },
   },
};

const labels = ['January', 'February', 'March'];

export const data = {
   labels,
   datasets: [
      {
         label: 'Dataset 1',
         data: [5, 2, 10],
         backgroundColor: '#FCB92C',
      },
      {
         label: 'Dataset 2',
         data: [5, 3, 10],
         backgroundColor: '#3B7DDD',
      },
   ],
};

export default function RightItem() {
   return <Grid style={{ flex: 1 }}>
      <Bar options={options as any} data={data} plugins={[ChartDataLabels]} />
   </Grid>

}