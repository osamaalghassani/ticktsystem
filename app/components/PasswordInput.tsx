import {
  type ControllerRenderProps,
  type FieldError,
  type FieldValues,
  type Path,
} from 'react-hook-form';

type PasswordInputType<T extends FieldValues, K extends Path<T>> = {
  readonly errors?: FieldError;
  readonly field: ControllerRenderProps<T, K>;
  readonly placeHolder: string;
};
export const PasswordInput = <T extends FieldValues, K extends Path<T>>({
  errors,
  field,
  placeHolder,
}: PasswordInputType<T, K>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className=" relative group    ">
      <div>
        <input
          className={` rounded-e-md ${
            errors ? 'focus:ring-red-500' : 'focus:ring-slate-500'
          } flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1  focus:border-transparent`}
          {...field}
          placeholder={placeHolder}
          type={showPassword ? 'text' : 'password'}
        />

        <div
          className="cursor-pointer"
          onClick={() => setShowPassword((previous) => !previous)}
        >
          {showPassword ? (
            <svg
              className="absolute end-2  top-1/2 -translate-y-1/2"
              fill="none"
              height="20"
              viewBox="0 0 28 24"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.97782 10.5834C3.29385 5.46998 8.33248 1.49998 14.007 1.49998C19.6814 1.49998 24.7062 5.46998 26.0222 10.5834"
                stroke="#64748B"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M10.6361 10.1373C10.6361 11.9945 12.1417 13.5 13.9988 13.5C15.856 13.5 17.3616 11.9945 17.3616 10.1373C17.3616 8.28009 15.856 6.77455 13.9988 6.77455C12.1417 6.77455 10.6361 8.28009 10.6361 10.1373Z"
                fill="#64748B"
                stroke="#64748B"
                strokeWidth="2"
              />
              <path
                d="M13.9988 14.5C11.5894 14.5 9.63613 12.5467 9.63613 10.1373C9.63613 7.72781 11.5894 5.77455 13.9988 5.77455C16.4083 5.77455 18.3616 7.72781 18.3616 10.1373C18.3616 12.5467 16.4083 14.5 13.9988 14.5Z"
                stroke="#64748B"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              className="absolute end-2  top-1/2 -translate-y-1/2"
              fill="none"
              height="20"
              viewBox="0 0 26 24"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.38829 10.5C2.65958 15.2683 7.52594 18.9706 13.0064 18.9706C18.4869 18.9706 23.3405 15.2683 24.6118 10.5"
                stroke="#64748B"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M13 19.6765V22.5"
                stroke="#64748B"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M7.22949 18.3007L5.94126 21.0883"
                stroke="#64748B"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M3.43457 14.8589L0.999981 16.853"
                stroke="#64748B"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M18.7706 18.3007L20.0588 21.0883"
                stroke="#64748B"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M22.5654 14.8589L25 16.853"
                stroke="#64748B"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
