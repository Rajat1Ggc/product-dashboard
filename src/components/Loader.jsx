import PropTypes from 'prop-types';

export default function Loader({ text = 'Loading…' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="h-8 w-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      <p className="mt-3 text-sm text-gray-500">{text}</p>
    </div>
  );
}

Loader.propTypes = {
  text: PropTypes.string,
};
