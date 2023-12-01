import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const { orders, isLoading } = useSelector((state) => state.order);

  // Check if orders is still loading
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Check if orders is not yet defined or empty
  if (!orders || orders.length === 0) {
    return <p>No sales data available</p>;
  }

  // Aggregate total sales for each day
  const salesData = orders.reduce((acc, order) => {
    const date = new Date(order.createdAt).toLocaleDateString();
    acc[date] = (acc[date] || 0) + order.totalPrice;
    return acc;
  }, {});

  const labels = Object.keys(salesData);
  const salesValues = Object.values(salesData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Performance',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Total Sales',
        data: salesValues,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default LineChart;
