import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../features/favorites/favoritesSlice';
import { HeartOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const favorites = useSelector(state => state.favorites.items);
  const dispatch = useDispatch();

  // Empty State
  if (!favorites.length) {
    return (
      <div className="text-center py-16 space-y-4">
        <HeartOff className="mx-auto text-gray-400" size={40} />
        <p className="text-gray-500">No favorites yet</p>
        <Link
          to="/"
          className="inline-block text-indigo-600 hover:underline text-sm"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {favorites.map(product => (
        <div
          key={product.id}
          className="bg-white border rounded-lg p-4 flex flex-col"
        >
          {/* Image */}
          <div className="h-32 flex items-center justify-center mb-3">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-contain"
            />
          </div>

          {/* Title */}
          <p className="text-sm font-medium text-gray-900 line-clamp-2">
            {product.title}
          </p>

          {/* Price */}
          <p className="mt-1 font-semibold text-gray-800">
            ${product.price}
          </p>

          {/* Action */}
          <button
            onClick={() => dispatch(removeFavorite(product.id))}
            className="mt-auto text-sm text-red-600 hover:underline"
          >
            Remove from favorites
          </button>
        </div>
      ))}
    </div>
  );
}
