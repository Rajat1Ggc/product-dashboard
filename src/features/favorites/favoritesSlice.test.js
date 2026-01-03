/* eslint-env jest */
import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from './favoritesSlice';

describe('favoritesSlice', () => {
  const product = { id: 1, title: 'Test Product' };

  it('should add product to favorites', () => {
    const state = favoritesReducer(
      { items: [] },
      addFavorite(product)
    );
    expect(state.items).toHaveLength(1);
  });

  it('should not add duplicate favorites', () => {
    const state = favoritesReducer(
      { items: [product] },
      addFavorite(product)
    );
    expect(state.items).toHaveLength(1);
  });

  it('should remove favorite', () => {
    const state = favoritesReducer(
      { items: [product] },
      removeFavorite(1)
    );
    expect(state.items).toHaveLength(0);
  });
});
