import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/templates/HomePage';
import CoinDetails from './components/templates/CoinDetailsPage';
import FavoritesPage from './components/templates/FavoritesPage';
import { FavoritesProvider } from './context/FavoritesContext';
import PageNotFound from './components/templates/NotFoundPage';
import ChartPage from './components/templates/ChartPage';
import Layout from './components/layout/Layout';
// chartjs setup
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);



function App() {


  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/chart/:id" element={<ChartPage />} />
          <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );

}

export default App
