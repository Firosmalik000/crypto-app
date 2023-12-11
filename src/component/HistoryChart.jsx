import React from 'react';
import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import Skeleton from './Skeleton';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const HistoryChart = () => {
  const { id } = useParams();
  const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);

  if (!response) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className={`h-72 w-full mb-10  `} />
      </div>
    );
  }

  const coinChartData = response.prices.map((value) => ({ x: new Date(value[0]), y: value[1].toFixed(2) }));
  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartData.map((value) => moment(value.x).format('MMM DD')), // Labels dapat diambil dari properti x
    datasets: [
      {
        label: id,
        fill: true,
        borderColor: '#00cc00',
        backgroundColor: '#ccffcc',
        data: coinChartData.map((value) => value.y), // Gunakan coinChartData yang sudah diubah formatnya
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryChart;
