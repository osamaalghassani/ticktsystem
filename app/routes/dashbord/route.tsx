import { NavBar } from './components/NavBar';
import { ConfirmDialog } from 'primereact/confirmdialog';

export function Component() {
  const navigate = useNavigate();
  const onLogOut = async () => {
    const { response } = await client.POST('/api/logout', {});

    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="grid grid-cols-[minmax(auto,_0.0fr)_auto]  overflow-hidden ">
      <NavBar />
      <div className="max-w-full overflow-hidden">
        <div className="flex justify-end items-center flex-wrap max-w-full gap-2 bg-zinc-900 py-10">
          <div className="flex items-center gap-2 lg:gap-3 " />
          <svg
            className="cursor-pointer"
            fill="#ffff"
            height="24"
            onClick={onLogOut}
            viewBox="0 0 16 16"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
              fillRule="evenodd"
            />
            <path
              d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <Outlet />
      </div>
      <ConfirmDialog />
    </div>
  );
}
