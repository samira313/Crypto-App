import React, { useState } from 'react';
import styles from '../../styles/Search.module.css';
import { Link } from 'react-router-dom';


function Search({ currency, setCurrency, allCoins }) {
  const [text, setText] = useState('');

  const filteredCoins = allCoins.filter((coin) =>
    coin.name.toLowerCase().includes(text.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(text.toLowerCase())
  );

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

      {text && (
        <div className={styles.searchResult}>
          {filteredCoins.length > 0 ? (
            <ul>
              {filteredCoins.map((coin) => (
                <li key={coin.id}>
                  <Link to={`/coins/${coin.id}`}>
                    <img src={coin.image} alt={coin.name} />
                    <p>{coin.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No coins found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
