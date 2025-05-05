import React, { useState } from 'react';
import { searchCoin } from '../../services/cryptoApi';
import { PulseLoader } from 'react-spinners';
import styles from '../../styles/Search.module.css';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useCallback } from 'react';

function Search({ currency, setCurrency }) {
  const [text, setText] = useState('');

  const fetchSearchCoins = useCallback(() => {
    return text.trim() ? searchCoin(currency, text) : Promise.resolve({ coins: [] });
  }, [currency, text]);
  
  const { data, loading } = useFetch(fetchSearchCoins, [currency, text]);
  

  return (
    <div className={styles.searchBox}>
      <input
        value={text}
        type="text"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>


      {(!!data?.coins?.length || loading) && (
        <div className={styles.searchResult}>
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <PulseLoader color="#f39c12" size={15} />
            </div>
          )}
          <ul>
            {data?.coins?.map((coin) => (
              coin.id && (
                <li key={coin.id}>
                  <Link to={`/coins/${coin.id}`}>
                    <img src={coin.thumb} alt={coin.name} />
                    <p>{coin.name}</p>
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
