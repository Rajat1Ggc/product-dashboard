import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heart } from 'lucide-react';

import { fetchProductById } from '../services/productsApi';
import { addFavorite, removeFavorite } from '../features/favorites/favoritesSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const isFav = favorites.some(p => p.id === Number(id));

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <p className="text-center py-10 text-gray-500">
        Loading product…
      </p>
    );
  }

  if (!product) {
    return (
      <p className="text-center py-10 text-red-500">
        Product not found
      </p>
    );
  }

  const toggleFavorite = () => {
    isFav
      ? dispatch(removeFavorite(product.id))
      : dispatch(addFavorite(product));
  };

  return (
    <div className="max-w-7xl mx-auto bg-white border rounded-lg p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-80 object-contain"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-gray-900">
            {product.title}
          </h1>

          <p className="text-gray-600 text-sm">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-gray-900">
            ${product.price}
          </p>

          <button
            onClick={toggleFavorite}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition ${
              isFav
                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            <Heart size={18} fill={isFav ? 'currentColor' : 'none'} />
            {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}
