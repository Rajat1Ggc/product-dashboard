import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSort } from '../features/products/productsSlice';
import PropTypes from 'prop-types';

export default function FilterBar({ categories }) {
  const dispatch = useDispatch();
  const { category, sort } = useSelector(state => state.products);

  return (
    <div className="flex flex-row gap-4">
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="all">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      {/* Sort Filter */}
      <select
        value={sort}
        onChange={(e) => dispatch(setSort(e.target.value))}
        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>
    </div>
  );
}

FilterBar.propTypes = {
  categories: PropTypes.array.isRequired,
};
