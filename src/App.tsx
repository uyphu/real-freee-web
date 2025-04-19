import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import PostItemPage from './pages/PostItemPage';
import LoginPage from './pages/LoginPage';
import ItemDetailPage from './pages/ItemDetailPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/post" element={<PostItemPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/item/:id" element={<ItemDetailPage />} />
    </Routes>
  );
};

export default App;
