import { Menu } from 'primereact/menu';

const Chat = () => {
  const menuLeft = useRef<Menu>(null);

  const itemRenderer = () => (
    <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col h-[400px]">
        <div className="px-4 py-3 border-b dark:border-zinc-700">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
              Chatbot Assistant
            </h2>
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Online
            </div>
          </div>
        </div>
        <div
          className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
          id="chatDisplay"
        >
          <div className="chat-message self-end bg-blue-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
            Hello! How can I assist you today?
          </div>
          <div className="chat-message self-start bg-zinc-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
            Hello! I need a Chatbot!
          </div>
        </div>
        <div className="px-3 py-2 border-t dark:border-zinc-700">
          <div className="flex gap-2">
            <input
              className="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
              id="chatInput"
              placeholder="Type your message..."
              type="text"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
              id="sendButton"
              type='button'
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const items = [
    {
      template: itemRenderer,
    },
  ];

  return (
    <div className="fixed end-1 bottom-1 w-10">
      <div
        className="  p-2 cursor-pointer group hover:shadow-md transition-shadow bg-white h-10 w-10 rounded-full flex gap-1 items-center justify-center"
        onClick={(event) => menuLeft.current?.toggle(event)}
      >
        <svg
          fill="none"
          height="26"
          viewBox="0 0 25 22"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              gradientTransform="rotate(52.68)"
              id="myGradient"
              x1="0%"
              x2="100%"
              y1="0%"
              y2="100%"
            >
              <stop
                offset="7.29%"
                stopColor="#3B82F6"
              />
              <stop
                offset="92.91%"
                stopColor="#06B6D4"
              />
            </linearGradient>
          </defs>

          <path
            className="group-hover:fill-[url(#myGradient)]"
            d="M2.82072 6.6001C4.10992 3.66255 6.64762 1.39215 9.75897 0.462646C8.78657 1.9834 8.10457 4.1856 7.73222 6.6001H2.82072Z"
            fill="#64748B"
          />
          <path
            className="group-hover:fill-[url(#myGradient)]"
            d="M1.89998 11V11.1155C2.16398 11.0385 2.43898 11 2.72498 11H7.39998C7.39998 10.0815 7.44398 9.163 7.53198 8.25H2.25198C2.02098 9.13 1.89998 10.0485 1.89998 11Z"
            fill="#64748B"
          />
          <path
            className="group-hover:fill-[url(#myGradient)]"
            d="M18.268 13.7501H23.548C23.779 12.8701 23.9 11.9516 23.9 11.0001C23.9 10.2246 23.8175 9.47112 23.6635 8.74512C23.471 8.77812 23.2785 8.80012 23.075 8.80012H19.027L18.345 9.29512C18.3835 9.86162 18.4 10.4281 18.4 11.0001C18.4 11.9186 18.356 12.8371 18.268 13.7501Z"
            fill="#64748B"
          />
          <path
            className="group-hover:fill-[url(#myGradient)]"
            d="M9.05 11H9.325C10.898 11 12.196 12.21 12.3335 13.75H16.6125C16.7005 12.8755 16.75 11.957 16.75 11C16.75 10.8185 16.75 10.637 16.739 10.461L16.508 10.6315C16.1725 10.8735 15.7765 11 15.375 11C15.078 11 14.7755 10.9285 14.5005 10.791C13.857 10.461 13.45 9.801 13.45 9.075V8.25H9.1875C9.0995 9.1245 9.05 10.043 9.05 11Z"
            fill="#64748B"
          />
          <path
            className="group-hover:fill-[url(#myGradient)]"
            d="M13.45 6.6V1.925C13.45 1.375 13.5985 0.858 13.8625 0.4125C13.5435 0.143 13.219 0 12.9 0C11.5415 0 10.062 2.6345 9.40199 6.6H13.45Z"
            fill="#64748B"
          />
          <path
            className="group-hover:fill-[url(#myGradient)]"
            d="M12.24 21.8021C12.46 21.9341 12.68 22.0001 12.9 22.0001C14.2585 22.0001 15.738 19.3656 16.398 15.4001H12.35V21.1751C12.35 21.3951 12.3115 21.6041 12.24 21.8021Z"
            fill="#64748B"
          />
          <path
            className="group-hover:fill-[url(#myGradient)]"
            d="M22.9793 15.4001C21.6901 18.3377 19.1524 20.6081 16.0411 21.5376C17.0135 20.0168 17.6955 17.8146 18.0678 15.4001H22.9793Z"
            fill="#64748B"
          />
          <path
            className="group-hover:fill-[url(#myGradient)]"
            d="M10.425 21.9999C10.5526 21.9999 10.6813 21.9702 10.7995 21.9102C11.0762 21.7694 11.25 21.4851 11.25 21.1749V14.0249C11.25 12.9634 10.3865 12.0999 9.325 12.0999H2.725C1.6635 12.0999 0.8 12.9634 0.8 14.0249V17.8749C0.8 18.9364 1.6635 19.7999 2.725 19.7999H7.13215L9.9399 21.842C10.0834 21.9465 10.2534 21.9999 10.425 21.9999Z"
            fill="#64748B"
          />
          <path
            className="group-hover:fill-[url(#myGradient)]"
            d="M16.475 0H23.075C24.1365 0 25 0.8635 25 1.925V5.775C25 6.8365 24.1365 7.7 23.075 7.7H18.6679L15.8601 9.74215C15.7165 9.84665 15.5466 9.9 15.375 9.9C15.2474 9.9 15.1187 9.8703 15.0005 9.81035C14.7238 9.66955 14.55 9.3852 14.55 9.075V1.925C14.55 0.8635 15.4135 0 16.475 0Z"
            fill="#64748B "
          />
        </svg>
      </div>
      <Menu
        id="popup_menu_left"
        model={items}
        popup
        onScroll={(event) => menuLeft.current?.toggle(event)}
        pt={{
          menu: { className: '!bg-white ' },
          menuitem: { className: '!bg-white !focus:bg-white' },
          root: { className: '!border-none !w-fit !p-0   ' },
        }}
        ref={menuLeft}
      />
    </div>
  );
};

export default Chat;
