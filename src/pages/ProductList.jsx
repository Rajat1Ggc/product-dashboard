import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, setSearch } from '../features/products/productsSlice';
import { fetchCategories } from '../services/productsApi';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Loader from '../components/Loader';
import useDebounce from '../hooks/useDebounce';
import PropTypes from 'prop-types';

function ProductList({ searchOpen }) {
  const dispatch = useDispatch();
 const [categories, setCategories] = useState([]);

  const { items, search, category, sort, status } = useSelector(
    state => state.products
  );

  // debounced search
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    dispatch(getProducts());

    fetchCategories()
      .then(setCategories)
      .catch(() => setCategories([]));
  }, [dispatch]);

  // Filter + sort using DEBOUNCED value
  const filteredProducts = useMemo(() => {
    let result = [...items];

    if (debouncedSearch) {
      result = result.filter(product =>
        product.title
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())
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
  }, [items, debouncedSearch, category, sort]);

  if (status === 'loading') {
    return <Loader text="Loading products…" />;
  }

  if (status === 'failed') {
    return (
      <p className="text-center py-10 text-red-500">
        Failed to load products
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {searchOpen && (
        <SearchBar
          value={search}
          onChange={(value) => dispatch(setSearch(value))}
        />
      )}
      <FilterBar categories={categories} />
      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <h3 className="font-semibold text-gray-800">
            No products found
          </h3>
          <p className="text-gray-500 text-sm">
            Your search did not match any products.
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  searchOpen: PropTypes.bool.isRequired,
};

export default ProductList;
