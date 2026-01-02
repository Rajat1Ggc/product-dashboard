import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProducts } from '../../services/productsApi';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    return fetchAllProducts();
  }
);

const initialState = {
  items: [],
  status: 'idle', // idle | loading | failed
  search: '',
  category: 'all',
  sort: 'asc',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSearch, setCategory, setSort } = productsSlice.actions;
export default productsSlice.reducer;
