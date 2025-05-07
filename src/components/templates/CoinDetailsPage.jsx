import { useParams, useNavigate } from 'react-router-dom';
import { getCoinDetails } from '../../services/cryptoApi';
import useFetch from '../../hooks/useFetch';
import { useCallback } from 'react';
import styles from '../../styles/CoinDetails.module.css';

function CoinDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

 
  
  const fetchCoin = useCallback(() => getCoinDetails(id), [id]);
  const { data: coin, loading: isLoading, error } = useFetch(fetchCoin, [id]);

  if (isLoading) return <p className={styles.container}>Loading...</p>;
  if (error || !coin?.image || !coin?.market_data)
     return <p className={styles.container} style={{ color: "red" }}>Coin not found or invalid data. 😢</p>;

  return (
    <div className={styles.container}>
   
      <h1 className={styles.title}>{coin.name}</h1>
      <img src={coin.image.large} alt={coin.name} className={styles.image} />
      <p className={styles.detail}><strong>Symbol:</strong> {coin.symbol.toUpperCase()}</p>
      <p className={styles.detail}><strong>Current Price:</strong> ${coin.market_data.current_price.usd.toLocaleString()}</p>
      <p className={styles.detail}><strong>Market Cap:</strong> ${coin.market_data.market_cap.usd.toLocaleString()}</p>
      <p className={styles.detail}><strong>24h Change:</strong> {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
      <div className={styles.description}>
        <strong>Description:</strong><br />
        <span dangerouslySetInnerHTML={{ __html: coin.description.en }} />
      </div>
      <button
          onClick={() => navigate('/')} className={styles.backButton}>
            ⬅ Back to Home
      </button>
    </div>
  );
}

export default CoinDetails;
