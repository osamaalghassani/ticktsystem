import {
  type ControllerRenderProps,
  type FieldError,
  type FieldValues,
  type Path,
} from 'react-hook-form';

type FloatingLabelProps<T extends FieldValues, K extends Path<T>> = {
  readonly errors?: FieldError;
  readonly field: ControllerRenderProps<T, K>;
  readonly labelName: string;
  readonly type: 'text' | 'password' | 'number';
};

export const FloatinInputLabel = <T extends FieldValues, K extends Path<T>>({
  errors,
  field,
  labelName,
  type,
}: FloatingLabelProps<T, K>) => {
  return (
    <div className="relative">
      <input
        className={`
       ${field.value && 'outline-none bg-white ring-1 ring-blue-800 '}
            relative bg-slate-200 w-full lg:fit text-gray-800 rounded-md p-2 
            ${errors ? 'border border-thin border-red-700' : 'border-gray-100'} 
            focus:outline-none focus:ring-1 ${
              errors ? 'focus:ring-red-500' : 'focus:ring-blue-800'
            } 
            focus:bg-white transition ease-in-out duration-150 peer
          `}
        {...field}
        id={field.name}
        type={type}
      />
      <label
        className={`
       ${
         field.value &&
         '!h-fit !w-fit !top-0 !start-3 !bg-[#ffff] !text-blue-800  !p-0  !translate-x-[-10%]'
       } 
            ${
              errors ? 'peer-focus:text-[#b91c1c]' : 'peer-focus:text-blue-800 '
            } absolute pointer-events-none text-xs transition-all 
            duration-400 ease-[cubic-bezier(0.05,0.81,0,0.93)] font-light text-[#94a3b8] 
            tracking-[0.1em] peer-focus:transform peer-focus:translate-x-[-10%] 
            peer-focus:p-0  peer-focus:rounded-[2px] peer-focus:bg-[#ffff] 
            peer-focus:tracking-normal peer-valid:transform 
            peer-valid:top-1/2 peer-valid:start-1 peer-focus:top-0 peer-focus:start-3 
             peer-valid:w-11/12 peer-valid:h-1/2 peer-focus:w-fit 
             
            peer-focus:h-fit peer-valid:translate-y-[-50%] peer-valid:p-0 peer-valid:rounded-[2px] 
            peer-valid:bg-[#e2e8f0] peer-valid:tracking-normal
          `}
        htmlFor={field.name}
      >
        {labelName}
      </label>
    </div>
  );
};
