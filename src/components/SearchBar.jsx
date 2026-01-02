import { Search } from 'lucide-react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">
      <Search
        className="absolute left-3 top-2.5 text-gray-400"
        size={18}
      />
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-md
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
