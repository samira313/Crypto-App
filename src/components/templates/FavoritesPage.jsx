import useFavorites from '../../hooks/useFavorites';
import { useNavigate } from 'react-router-dom';
import styles from  "../../styles/Favorites.module.css";


function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate()

  return (
  <div className={styles.page}>
    <div className={styles.container}>
      <h1 className={styles.title}>Your Favorite Coins ❤️</h1>

      {favorites.length === 0 ? (
        <p className={styles.emptyMessage}>No coins added to favorites yet.</p>
      ) : (
        <div className={styles.favoriteList}>
          {favorites.map((coin) => (
           <div
           key={coin.id}
           className={styles.card}
           onClick={() => navigate(`/coins/${coin.id}`)}
           style={{ cursor: 'pointer' }}
         >

          <button
              className={styles.removeBtn}
              onClick={(e) => {
                e.stopPropagation(); 
                e.preventDefault(); 
                removeFromFavorites(coin.id);
              }}
            >
              &times;
         </button>

           <img src={coin.image} alt={coin.name} className={styles.image} />
           <span>{coin.name}</span>
         </div>
       ))}
     </div>
         
      )}  

          <button onClick={() => navigate('/')} className={styles.backButton}>
            ⬅ Back to Home
          </button>
      
    </div>
   </div>
  );
}

export default FavoritesPage;
