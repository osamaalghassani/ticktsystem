
export const HeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState(1);

  const navItems = [
    { href: '/', id: 1, text: `الرئيسية` },
    { href: '/addCar', id: 2, text: `إضافة سيارة` },
    { href: '/allCars', id: 3, text: `السيارات المعروضة` },
  ];
  const handleClick = (id: number) => {
    setActiveLink(id);
  };

  return (
    <>
      <label className="lg:hidden">
        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
          <input
            className="hidden peer"
            onClick={() => setOpen((preve) => !preve)}
            type="checkbox"
          />
          <div className="w-[50%] h-[3px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.55rem] peer-checked:rotate-[-45deg]" />
          <div className="w-[50%] h-[3px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
          <div className="w-[50%] h-[3px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.55rem] peer-checked:rotate-[45deg]" />
        </div>
      </label>

      <div
        className={`transition-all top-16   shadow-2xl duration-300 z-[-1] w-full  flex  ${
          open
            ? ' h-full  bg-gray-950  visible bg-opacity-80    '
            : ' h-0 overflow-hidden'
        } fixed  start-0    `}
      >
        <div className="bg-white w-full h-2/3 flex items-center  justify-center rounded-br-[3rem] rounded-bl-[3rem]   ">
          <ul className="flex flex-col gap-5 items-center   ">
            {navItems.map(({ href, id, text }) => (
              <li key={id}>
                <a
                  className=" cursor-pointer lg:py-6 relative block transition-all duration-300 "
                  href={href}
                  onClick={() => handleClick(id)}
                >
                  <span
                    className={`hover:text-blue-800 hover:font-bold  px-2 py-1 rounded-md text-2xl   ${
                      activeLink === id
                        ? 'font-bold text-blue-800'
                        : ' font-normal text-slate-500'
                    }  transition-all`}
                  >
                    {text}
                  </span>
                </a>
              </li>
            ))}
         
          </ul>
        </div>
      </div>
    </>
  );
};
