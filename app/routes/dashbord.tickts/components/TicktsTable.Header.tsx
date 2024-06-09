import { searchInTable } from '../store';
import { type SetStateAction } from 'react';

export const TicktsTableHeader = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = useCallback(
    (event: { target: { value: SetStateAction<string> } }) => {
      setInputValue(event.target.value);
      if (event.target.value.length === 0) searchInTable('');

    },
    [setInputValue],
  );

  const handleAddClick = useCallback(() => {
    navigate('add');
  }, [navigate]);

  return (
    <div className="flex justify-start border-solid ms-6 m-5 w-full items-center gap-5 flex-wrap max-w-full">
      <button
        className=" lg:px-10  px-6  h-10 lg:h-[40px]    rounded-md cursor-pointer text-sm lg:text-base  font-bold text-white   relative  text-center bg-custom-gradient    z-10  hover:animate-gradient-xy  hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[1px] before:-bottom-[1px] before:-left-[1px] before:-right-[1px] before:bg-gradient-to-r before:from-zinc-900  before:blue-500 before:via-30% before:to-zinc-500 before:bg-[length:400%] before:-z-10 before:rounded-lg before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-blue-500 focus:ring-cyan-500"
        onClick={handleAddClick}
        type="button"
      >
        إضافة تذكرة
      </button>

      <div className=" relative  flex     ">
        <input
          className=" peer bg-white 
                          
          focus:ring-zinc-900  rounded-md w-32 rounded-e-none  md:w-full h-11 lg:h-[40px]  
          appearance-none border border-slate-300   px-10 
           placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 
           focus:bg-white  focus:border-transparent"
          onChange={handleInputChange}
          placeholder='أبحث'
          type="text"
          value={inputValue}
        />
        <svg
          className="absolute start-2  top-1/2 -translate-y-1/2  "
          fill="none"
          height="15"
          viewBox="0 0 24 24"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-zinc-900  "
            d="M10.2932 0C4.60841 0 0 4.65799 0 10.4039C0 16.1498 4.60841 20.8078 10.2932 20.8078C15.9779 20.8078 20.5863 16.1498 20.5863 10.4039C20.5863 7.64463 19.5019 4.99835 17.5716 3.04724C15.6412 1.09612 13.0231 0 10.2932 0Z"
          />
          <path
            className="fill-zinc-900 "
            d="M23.4816 21.2597L20.416 18.7851C19.9522 18.3244 19.2087 18.3244 18.7448 18.7851C18.5043 19.0274 18.3691 19.3564 18.3691 19.6996C18.3691 20.0428 18.5043 20.3719 18.7448 20.6141L21.2889 23.5298C21.9091 24.1567 22.9146 24.1567 23.5348 23.5298C24.155 22.9029 24.155 21.8866 23.5348 21.2597H23.4816Z"
          />
        </svg>
        <button
          className="peer-focus:ring-2 ring-zinc-900  bg-zinc-900 py-2 px-4 rounded-e-lg  text-white font-semibold hover:bg-zinc-500 transition-colors"
          onClick={() => searchInTable(inputValue)}
          type="button"
        >
بحث        </button>
      </div>
    </div>
  );
};
