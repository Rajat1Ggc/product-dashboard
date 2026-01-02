import { createSelector } from '@reduxjs/toolkit';

const selectProducts = (state) => state.products.items;
const selectSearch = (state) => state.products.search;
const selectCategory = (state) => state.products.category;
const selectSort = (state) => state.products.sort;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearch, selectCategory, selectSort],
  (products, search, category, sort) => {
    let result = [...products];

    if (search) {
      result = result.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== 'all') {
      result = result.filter(
        product => product.category === category
      );
    }

    if (sort === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }
);

export const selectProductsStatus = (state) =>
  state.products.status;
