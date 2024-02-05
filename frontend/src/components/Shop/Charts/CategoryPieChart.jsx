import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const CategoryPieChart = () => {
  const { products } = useSelector((state) => state.products);

  // Check if products is not yet defined or empty
  if (!products || products.length === 0) {
    return <p>No product data available</p>;
  }

  // Aggregate category data
  const categoryData = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(categoryData);
  const dataValues = Object.values(categoryData);

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Category Distribution (Pie Chart)',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default CategoryPieChart;
