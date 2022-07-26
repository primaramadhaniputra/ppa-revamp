import { Text } from '@hudoro/neron'
import React from 'react'
import { Wrapper } from './styles'
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Bar } from 'react-chartjs-2';
import { fontWeights } from 'utils/styles';

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
   annotationPlugin
);

export const options = {
   responsive: true,
   plugins: {
      legend: {
         display: false,
      },
      annotation: {
         annotations: {
            box1: {
               type: 'line',
               borderColor: '#FF4560',
               borderDash: [6, 6],
               borderDashOffset: 0,
               borderWidth: 3,
               label: {
                  enabled: true,
                  content: 'Target 98,5%',
                  position: 'end',
                  backgroundColor: '#FF4560'
               },
               scaleID: 'y',
               value: 50
            },
         }
      }

   },
};

const labels = ['ENG', 'FLO', 'HCG', 'MNG', 'PAC', 'PLT', 'ENG', 'SHE'];

export const data = {
   labels,
   datasets: [
      {
         label: 'Dataset 1',
         data: [60, 65, 60, 60, 70, 65, 70, 60],
         backgroundColor: ["#FF4560", '#3B7DDD', "#FF4560", '#3B7DDD', '#3B7DDD', '#3B7DDD',],
      },
   ],
};

export default function LeftChart() {
   return (
      <Wrapper>
         <Text variant='h4' style={{ fontWeight: fontWeights.bold, marginBottom: '20px' }}>DAR CHART</Text>
         <Bar options={options as any} data={data} />;
      </Wrapper>
   )
}
