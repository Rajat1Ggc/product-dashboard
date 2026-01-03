/* eslint-env jest */
import productsReducer, {
  setSearch,
  setCategory,
  setSort,
} from './productsSlice';

describe('productsSlice', () => {
  const initialState = {
    items: [],
    status: 'idle',
    search: '',
    category: 'all',
    sort: 'asc',
  };

  it('should return initial state', () => {
    expect(productsReducer(undefined, { type: 'unknown' }))
      .toEqual(initialState);
  });

  it('should set search value', () => {
    const state = productsReducer(
      initialState,
      setSearch('shirt')
    );
    expect(state.search).toBe('shirt');
  });

  it('should set category', () => {
    const state = productsReducer(
      initialState,
      setCategory('electronics')
    );
    expect(state.category).toBe('electronics');
  });

  it('should set sort order', () => {
    const state = productsReducer(
      initialState,
      setSort('desc')
    );
    expect(state.sort).toBe('desc');
  });
});
