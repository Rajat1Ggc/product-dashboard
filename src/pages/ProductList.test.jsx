/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import ProductList from './ProductList';

function renderWithStore(ui) {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      favorites: favoritesReducer,
    },
  });

  return render(<Provider store={store}>{ui}</Provider>);
}

test('shows loader while products are loading', () => {
  renderWithStore(<ProductList searchOpen={false} />);

  expect(
    screen.getByText(/Loading products/i)
  ).toBeInTheDocument();
});
