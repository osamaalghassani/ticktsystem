import React from 'react';

type Props = {
  readonly accordionBody: React.JSX.Element;
  readonly accordionHeadr: React.JSX.Element;
  readonly visible: boolean;
};

const Accordion = ({ accordionBody, accordionHeadr, visible }: Props) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div className=" w-full  ">
      {visible && (
        <button
          className="flex relative justify-between text-zinc-700 w-[93%] mx-auto rounded-md hover:bg-custom-gradient group bg-white py-3 px-2 flex items-center gap-2 "
          onClick={() => setAccordionOpen(!accordionOpen)}
          type="button"
        >
          <span>{accordionHeadr}</span>
          <svg
            aria-hidden="true"
            className="fi-icon-btn-icon h-5 w-5 group-hover:fill-white"
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`transform origin-center  ${
                locale.value === 'ar' ? 'rotate-[270deg]' : '-rotate-[270deg]'
              } transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
              clipRule="evenodd"
              d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden py-2">{accordionBody}</div>
      </div>
    </div>
  );
};

export default Accordion;
