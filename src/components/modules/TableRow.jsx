import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "../../styles/TableCoin.module.css"
import getCurrencySymbol from "../../utils/getCurrencySymbol";
import { Link, useNavigate } from "react-router-dom";
import useFavorites from '../../hooks/useFavorites';


const TableRow = ({
  
    coin: {
        id,
      name,
      image,
      symbol,
      total_volume,
      current_price,
      price_change_percentage_24h: price_change ,
    },
    currency, 
  
  }) => {

    const showChartHandler = () => {
        navigate(`/chart/${id}`);
    }
  
    const symbolIcon = getCurrencySymbol(currency);
    const navigate = useNavigate();
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

    const isFavorite = favorites.some((c) => c.id === id);
  
    const toggleFavorite = () => {
        if (isFavorite) {
          removeFromFavorites(id);
        } else {
          addToFavorites({
            id,
            name,
            symbol,
            image,
          });
       
        }
      };
    return (
    <tr>
        <td>
            <div className={styles.symbol}>
                <img src={image} alt={name} style={{ width: '20px', height: '20px' }} />
                <span>{symbol.toUpperCase()}</span>
            </div>
        </td>

        <td>
            <Link to={`/coins/${id}`} className={styles.link}>
              {name}
            </Link>
        </td>

            <td>{symbolIcon}{current_price.toLocaleString()}</td>
            <td className={price_change > 0 ? styles.success : styles.error}>{price_change.toFixed(2)}%</td>
            <td>{total_volume.toLocaleString()}</td>

            <td onClick={showChartHandler}>
              <img 
              src={price_change > 0 ? chartUp : chartDown}
              alt={name}
              className={styles.chartIcon}
            />
           </td>

       <td>
            <button
              onClick={toggleFavorite}
              className={styles.favoriteBtn}
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? "💔" : "💖"}
            </button>
      </td>
  </tr>
    )
  }

  export default TableRow