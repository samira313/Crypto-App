import TableCoin from '../modules/tableCoin';
import { getCoinList } from '../../services/cryptoApi';
import Pagination from '../modules/Pagination';
import Search from '../modules/Search';
import useFetch from '../../hooks/useFetch';
import { useState, useCallback } from 'react';

function HomePage() {
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('USD');

  const fetchCoins = useCallback(() => {
    return getCoinList(page, currency);
  }, [page, currency]);


  const { data: coins, loading: isLoading, error } = useFetch(fetchCoins, [page, currency]);

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins || []} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
