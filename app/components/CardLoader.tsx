export const CardLoader = () => {
  return (
    <div className="flex  w-[300px] max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
      <p className="flex-1 bg-cover bg-lans dscape w-10 h-full bg-slate-300 animate-pulse" />
      <div className="flex-1 w- p-4">
        <h1 className="text-2xl font-bold text-gray-900 w-full h-7 bg-slate-300 animate-pulse"></h1>
        <p className="mt-2 text-sm text-gray-600 w-full h-5 bg-slate-300 animate-pulse"></p>

        <div className="flex justify-between mt-3 item-center">
          <button
            type="button"
            className="px-3 py-2 text-xs font-bold bg-slate-300 animate-pulse w-32 h-7 text-white uppercase bg-blue-800 rounded"
          ></button>
        </div>
      </div>
    </div>
  );
};
