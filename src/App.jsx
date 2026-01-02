import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <NavBar
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route
            path="/"
            element={<ProductList searchOpen={searchOpen} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
