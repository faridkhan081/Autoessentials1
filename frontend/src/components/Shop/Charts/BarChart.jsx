import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const { orders, isLoading } = useSelector((state) => state.order);

  // Check if orders is still loading
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Check if orders is not yet defined or empty
  if (!orders || orders.length === 0) {
    return <p>No orders data available</p>;
  }

  // Aggregate order status data
  const statusData = orders.reduce((acc, order) => {
    const status = order.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(statusData);
  const statusValues = Object.values(statusData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Order Status Distribution (Bar Chart)',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Order Status',
        data: statusValues,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;
