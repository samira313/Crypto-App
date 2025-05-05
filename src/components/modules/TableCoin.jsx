import TableRow from "./TableRow";
import { ClipLoader } from "react-spinners";
import styles from "../../styles/TableCoin.module.css";

function TableCoin({ coins, isLoading, currency ,setChart }) {  
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div >
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th>Chart</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow key={coin.id} coin={coin} currency={currency} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
