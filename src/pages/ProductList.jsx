import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, setSearch } from '../features/products/productsSlice';
import { selectProductsStatus } from '../features/products/productsSelectors';
import useDebounce from '../hooks/useDebounce';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';

function ProductList({ searchOpen }) {
  const dispatch = useDispatch();
  const { items, search } = useSelector(state => state.products);
  const status = useSelector(selectProductsStatus);

  // ✅ Debounced search value
  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // ✅ Filter using debounced value
  const filteredProducts = useMemo(() => {
    if (!debouncedSearch) return items;

    return items.filter(product =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [items, debouncedSearch]);

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
      {/* Search */}
      {searchOpen && (
        <SearchBar
          value={search}
          onChange={(value) => dispatch(setSearch(value))}
        />
      )}

      {/* Empty State */}
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

      {/* Products Grid */}
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
