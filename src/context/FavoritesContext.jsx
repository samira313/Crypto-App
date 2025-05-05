import { createContext, useContext, useState, useEffect, useMemo } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (coin) => {
    if (!favorites.find((item) => item.id === coin.id)) {
      setFavorites([...favorites, coin]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };


  const contextValue = useMemo( () => ({ 
      favorites, 
      addToFavorites,
      removeFromFavorites 
    }),
     [favorites]
  );

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);