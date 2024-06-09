export const Header = ({ showNav }: { readonly showNav: boolean }) => {
  const navItems = [
    { href: '/', id: 1, text: `الرئيسية` },
    { href: '/addCar', id: 2, text: `إضافة سيارة` },
    { href: '/allCars', id: 3, text: `السيارات المعروضة` },
  ];
  return (
    <header className=" sticky top-0 z-10 bg-white !z-20 relative ">
      <div className="container flex items-center justify-between  pb-3 lg:pb-0 pt-3 px-2 lg:px-0 ">
        <div>
          <Link to="/">
            <span
              className={`text-blue-800 font-bold  px-2 py-1 rounded-md text-xl max-lg:text-xl   
                             'font-bold text-blue-800'
                          transition-all`}
            >
              كار ستور
            </span>
          </Link>
        </div>
        {showNav && (
          <nav>
            <ul className="lg:flex hidden items-center justify-between gap-1">
              {navItems.map(({ href, id, text }) => (
                <li key={id}>
                  <Link to={href}>
                    <span className=" cursor-pointer lg:py-6 relative block">
                      <span
                        className="hover:text-blue-800 hover:font-bold  px-2 py-1 rounded-md text-xl max-lg:text-xl
                          transition-all font-normal text-slate-500"
                      >
                        {text}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="flex gap-2 items-center">
          {showNav && <HeaderMobile />}
        </div>
      </div>
    </header>
  );
};
