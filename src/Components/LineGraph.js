import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

// const defaultData = {
//   labels: [0, `Total Revenue: 0`, 30000],
//   datasets: [
//     {
//       label: 'Product Quantity',
//       data: [1000, 0, 10000],
//       tension: 0.4,
//       pointStyle: 'rect',
//       pointBorderColor: 'blue',
//       pointBackgroundColor: '#fff',
//       showLine: true
//     }
//   ]
// }

function LineGraph(props) {
  const { data } = props
  return (
    <div className="result" style={{ width: '45rem', height: '25rem' }}>
      <Line data={data}></Line>
    </div>
  );
}

export default LineGraph;