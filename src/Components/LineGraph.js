import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function LineGraph(props) {
  const { data } = props
  return (
    <div className="line-chart" style={{ width: '100%', height: '100%' }}>
      <Line data={data}></Line>
    </div>
  );
}

export default LineGraph;