/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */

import Logo from '@/assets/Logo.svg';
import Accordion from '@/components/Accordion';

export const NavBar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className={` min-h-screen ${
          open ? 'w-44 md:w-64 ' : 'w-0'
        }  bg-[#ffff]   shadow-md transition-all duration-500 overflow-y-scroll overflow-x-hidden  h-full`}
      >
        <div className=" list-none  p-0 m-0 flex flex-col items-center h-full  ">
          <div className="logo font-bold uppercase border-b  mb-4 text-center text-lg w-full ">
            <span className="flex items-center h-20  ">الشعار</span>
          </div>
          <div className="w-full flex flex-col gap-1">
            <Link to="/dashbord/tickts">
              <div
                className={`
               ${pathname === '/dashbord/tickts' && 'bg-custom-gradient text-white  '}
              group/item flex  items-center cursor-pointer  h-10 w-11/12 mx-auto rounded-md p-1  hover:text-white font-medium hover:bg-custom-gradient 
          `}
              >
                <svg
                  className="bi bi-ticket-perforated-fill"
                  className={`fi-sidebar-item-icon h-6 w-6
                  ${pathname === '/dashbord/tickts' && 'fill-white'}
                  ${
                    open ? 'flex-initial' : ' flex-1'
                  }  text-gray-400 group-hover/item:fill-white dark:text-gray-500`}
                  fill="#09090b"
                  height="24"
                  viewBox="0 0 16 16"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z" />
                </svg>

                <span className={`  hidden ms-4 ${open ? '!inline' : ''} `}>
                التذاكر
                </span>
              </div>
            </Link>
           
          </div>
        </div>
      </div>

      <div className="absolute end-[-3rem] top-5  me-3 ">
        <label className="">
          <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
            <input
              className="hidden peer"
              onClick={() => setOpen((preve) => !preve)}
              type="checkbox"
            />
            <div className="w-[50%] h-[3px] bg-[#FFFF] rounded-sm transition-all duration-300 origin-left translate-y-[0.55rem] peer-checked:rotate-[-45deg]" />
            <div className="w-[50%] h-[3px] bg-[#FFFF] rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
            <div className="w-[50%] h-[3px] bg-[#FFFF] rounded-md transition-all duration-300 origin-left -translate-y-[0.55rem] peer-checked:rotate-[45deg]" />
          </div>
        </label>
      </div>
    </div>
  );
};
