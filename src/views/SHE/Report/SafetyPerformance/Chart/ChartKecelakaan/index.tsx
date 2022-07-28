import { Card, fontFamilies } from '@hudoro/neron'
import React from 'react'
import { TitleChart } from './styles'
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
   PointElement,
   LineElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
   PointElement,
   LineElement,
);

const options = {
   responsive: true,
   plugins: {
      legend: {
         position: 'top' as const,
         display: false
      },
   },
   scales: {
      y: {
         // type: 'linear',
         display: true,
         position: 'left',
         title: {
            display: true,
            text: 'Man Power',
            position: 'left' as const,
            font: {
               color: '#000',
               weight: 'bold',
               family: fontFamilies.poppins,
            },
         },
      },
      y1: {
         type: 'linear',
         display: true,
         position: 'right',
         title: {
            display: true,
            text: 'Incident',
            position: 'left' as const,
            font: {
               weight: 'bold',
               family: fontFamilies.poppins
            }
         },
         // grid: {
         //    drawOnChartArea: false
         // },
      },
      x: {
         grid: {
            display: false,
         }
      },
   }
};

const labels = ['January', 'February', 'March', 'April', 'Mei', 'Juni', 'July', 'Agustus', 'September', 'November', 'Oktober', 'Desember'];

const data = {
   labels,
   datasets: [
      {
         type: 'line',
         label: 'Dataset 1',
         data: [5, 10, 5, 10, 20, 30, 20, 5, 15, 25, 5, 0],
         borderColor: '#10E6A6',
         pointStyle: 'rect',
         pointRadius: 10,
         pointHoverRadius: 15,
         backgroundColor: '#10E6A6',
         // stepped: true,
         borderWidth: 2
      },
      {
         label: 'Dataset 1',
         data: [10, 20, 10, 15, 10, 20, 10, 15, 10, 20, 10, 15],
         backgroundColor: '#3B7DDD',
      },

   ],
};

export default function ChartKecelakaan() {
   return (
      <Card style={{ marginTop: '40px', borderRadius: '3px' }}>
         <TitleChart >Frekuensi Kecelakaan</TitleChart>
         <Bar options={options as any} data={data as any} style={{ maxHeight: '400px' }} />
      </Card>
   )
}
