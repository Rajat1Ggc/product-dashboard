import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favorites/favoritesSlice';
import { Heart } from 'lucide-react';
import PropTypes from 'prop-types';

 function ProductCard({ product }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFav = favorites.some(p => p.id === product?.id);

  const toggleFavorite = () => {
    isFav
      ? dispatch(removeFavorite(product?.id))
      : dispatch(addFavorite(product));
  };

  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col hover:shadow-md transition">
      <div className="h-36 flex items-center justify-center mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
        {product.title}
      </h3>
      <p className="mt-1 font-semibold text-gray-800">
        ${product.price}
      </p>

      <div className="mt-auto flex items-center justify-between pt-3">
        <Link
          to={`/product/${product.id}`}
          className="text-sm text-indigo-600 hover:underline"
        >
          View details
        </Link>
        <button
          onClick={toggleFavorite}
          aria-label="Toggle favorite"
          className={`p-2 rounded-full transition ${
            isFav
              ? 'text-red-500 bg-red-50'
              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <Heart size={18} fill={isFav ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};


export default ProductCard;
