import { getCoinChart } from '../../services/cryptoApi';
import { Line } from 'react-chartjs-2';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import styles from '../../styles/Chart.module.css';

function ChartPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: chartData, loading, error } = useFetch(() => getCoinChart(id));

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Something went wrong...</p>;
  if (!chartData) return <p>No data available</p>;

  const labels = chartData.prices.map(item => new Date(item[0]).toLocaleDateString());
  const prices = chartData.prices.map(item => item[1]);

  const chartDataset = {
    labels,
    datasets: [
      {
        data: prices,
        borderColor: "#f39c12",
   
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>{id.toUpperCase()} Price Chart</h2>
      <Line
        data={chartDataset}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              ticks: {
                color: '#f8f8f8',
              },
            },
            x: {
              ticks: {
                color: '#f8f8f8',
              },
            },
          },
        }}
      />

  <button onClick={() => navigate('/')} className={styles.backButton}>
  ⬅ Back to Home
  </button>
    </div>
  );
}

export default ChartPage;