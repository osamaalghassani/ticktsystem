import backGround from '@/assets/background.jpg';
import { Toast } from 'primereact/toast';

export type FieldValues = {
  email: string;
  password: string;
};

export function Component() {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FieldValues>();
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();
  const onSubmit = async (payLoad: FieldValues) => {
    console.log(payLoad);
    const { data, error } = await client.POST('/api/login', {
      body: { ...payLoad },
    });

    if (data) {
      toast.current?.show({
        detail: 'تم تسجيل الدخول',
        life: 3_000,
        severity: 'success',
      });
      localStorage.setItem('token', data?.access_token);
      localStorage.setItem('tokenType', data?.token_type);
      navigate('/dashbord/tickts');
    }

    if (error) {
      toast.current?.show({
        detail: error?.message,
        life: 3_000,
        severity: 'error',
      });
    }
  };

  return (
    <div className="flex flex-wrap w-full">
      <div className="w-1/2 shadow-2xl">
        <img
          className="hidden object-cover w-full h-screen md:block"
          src={backGround}
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl text-center">مرحبا بك</p>
          <form
            className="flex flex-col pt-3 px-2 md:pt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <span className=" inline-flex rounded-s-md items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    fill="currentColor"
                    height="15"
                    viewBox="0 0 1792 1792"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
                  </svg>
                </span>
                <Controller
                  control={control}
                  defaultValue=""
                  name="email"
                  render={({ field, fieldState: { error } }) => (
                    <div className=" relative   w-full  ">
                      <input
                        {...field}
                        className={` rounded-e-md ${
                          error ? 'focus:ring-red-500' : 'focus:ring-slate-500'
                        } flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1  focus:border-transparent`}
                        id="design-login-email"
                        placeholder="البريد"
                        type="text"
                      />
                    </div>
                  )}
                  rules={{ required: true }}
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <span className=" rounded-s-sm inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    fill="currentColor"
                    height="15"
                    viewBox="0 0 1792 1792"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z" />
                  </svg>
                </span>
                <Controller
                  control={control}
                  defaultValue=""
                  name="password"
                  render={({ field, fieldState: { error } }) => (
                    <div className=" relative   w-full  ">
                      <PasswordInput
                        errors={error}
                        field={field}
                        placeHolder="كلمة السر"
                      />
                    </div>
                  )}
                  rules={{ required: true }}
                />
              </div>
            </div>
            <button
              className={` ${
                isSubmitting ? 'animate-pulse' : ''
              } rounded-md w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-zinc-700 hover:bg-zinc-400 focus:outline-none focus:ring-2`}
              type="submit"
            >
              <span className="w-full">تسجيل الدخول</span>
            </button>
          </form>
          <div className="pt-12 pb-12 text-center">
            <p>
              ليس لديك حساب؟
              <Link to="register">
                <span className="font-semibold   hover:text-zinc-400 transition-colors underline">
                  سجل هنا
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toast
        pt={{ root: { className: 'w-auto mx-auto' } }}
        ref={toast}
      />
    </div>
  );
}
