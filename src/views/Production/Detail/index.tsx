import React from 'react'
import Layout from 'src/components/layouts/Dashboard/layout';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartWrapper } from './styles';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

export const options = {
   responsive: true,
   plugins: {
      legend: {
         position: 'bottom' as const,
         labels: {
            padding: 30
         },
      },
      title: {
         display: true,
         text: 'Banana',
      },
   },
};

const labels = ['January', 'February', 'March', 'April'];

export const data = {
   labels,
   datasets: [
      {
         label: 'Plan',
         data: [100, 200, 100, 400],
         borderColor: '#E67C39',
         backgroundColor: '#E67C39',
         tension: .4,
         pointRadius: 0,
         pointHoverRadius: 0,
      },
      {
         label: 'Produksi',
         data: [200, 200, 200, 200],
         borderColor: '#4571C2',
         backgroundColor: '#4571C2',
         pointRadius: 0,
         pointHoverRadius: 0,
      },

   ],
};

export default function ProductionDetail() {
   return (
      <Layout title="Production / Detail">
         <ChartWrapper>
            <Line options={options} data={data} />
         </ChartWrapper>
      </Layout>
   );
}
