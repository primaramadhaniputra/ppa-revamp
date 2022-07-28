import { Card, fontFamilies } from '@hudoro/neron'
import React from 'react'
import { TitleChart, Wrapper } from './styles'
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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { fontWeights } from 'utils/styles';

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);
const options = {
   plugins: {
      datalabels: {
         color: 'White',
         font: {
            size: 15,
            family: fontFamilies.poppins,
            weight: fontWeights.semi
         },
         align: 'center',
         padding: 10
      }
   },
   responsive: true,
   scales: {
      x: {
         stacked: true,
         grid: {
            display: false,
         }
      },
      y: {
         stacked: true,
      },
   },

};

const labels = ['January', 'February', 'March', 'April', 'Mei', 'Juni', 'July', 'Agustus', 'September', 'November', 'Oktober', 'Desember'];

const data = {
   labels,
   datasets: [
      {
         label: 'First Aid Injury',
         data: [10, 20, 10, 15, 10, 20, 10, 15, 10, 20, 10, 15],
         backgroundColor: '#3B7DDD',
      },
      {
         label: 'Lost Time Injury',
         data: [10, 20, 10, 15, 10, 20, 10, 15, 10, 20, 10, 15],
         backgroundColor: '#546E7A',
      },
      {
         label: 'Fatal',
         data: [10, 20, 10, 15, 10, 20, 10, 15, 10, 20, 10, 15],
         backgroundColor: '#FF4560',
      },
      {
         label: 'Property Damage',
         data: [10, 20, 10, 15, 10, 20, 10, 15, 10, 20, 10, 15],
         backgroundColor: '#7B61D2',
      },
      {
         label: 'Near Miss',
         data: [10, 20, 10, 15, 10, 20, 10, 15, 10, 20, 10, 15],
         backgroundColor: '#FCB92C',
      },
      {
         label: 'Medical Treatment Injury',
         data: [10, 20, 10, 15, 10, 20, 10, 15, 10, 20, 10, 15],
         backgroundColor: '#00E396',
      },
      {
         label: 'First Case',
         data: [10, 20, 10, 15, 10, 20, 10, 15, 10, 20, 10, 15],
         backgroundColor: '#FF4560',
      },

   ],
};

export default function GrafikIncident() {
   return (
      <Wrapper>
         <Card style={{ marginTop: '40px', borderRadius: '3px' }}>
            <TitleChart >Grafik Incident</TitleChart>
            <Bar options={options as any} data={data as any} style={{ maxHeight: '400px' }} plugins={[ChartDataLabels]} />
         </Card>
      </Wrapper>
   )
}
