type Props = {
  readonly carId: string;
  readonly description: string;
  readonly image: string;
  readonly price: string;
  readonly title: string;
};

export const CardProduct = ({
  carId,
  description,
  image,
  price,
  title,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex  max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
      <img
        className="w-1/3 bg-cover bg-lans dscape"
        src={image}
      />
      <div className="w-2/3 p-4">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="flex mt-2 item-center">
          <svg
            className="w-5 h-5 text-gray-700 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
          <svg
            className="w-5 h-5 text-gray-700 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
          <svg
            className="w-5 h-5 text-gray-700 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
          <svg
            className="w-5 h-5 text-gray-500 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
          <svg
            className="w-5 h-5 text-gray-500 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        </div>
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-xl font-bold text-gray-700">${price}</h1>
          <button
            className="px-3 py-2 text-xs font-bold text-white uppercase bg-blue-800 rounded"
            onClick={() => navigate(`/carDetails/${carId}`)}
            type="button"
          >
            عرض التفاصيل
          </button>
        </div>
      </div>
    </div>
  );
};
