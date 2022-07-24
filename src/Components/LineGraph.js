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
    <div className="result" style={{ width: '45rem', height: '25rem' }}>
      <Line data={data}></Line>
    </div>
  );
}

export default LineGraph;