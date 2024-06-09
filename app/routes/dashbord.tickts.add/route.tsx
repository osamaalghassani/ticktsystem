import { Header } from './components/Header';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

type FieldValues = {
  created_at: string;
  created_by: number;
  description: string;
  device_name: string;
  id: number;
  model: string;
  serialNumber: string;
  status: string;
  title: string;
  updated_at: string;
};

export function Component() {
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FieldValues>();

  const onSubmit = async (payLoad: FieldValues) => {
    const { response } = await client.POST('/api/tickets', {
      body: payLoad,
    });

    if (response.status !== 200) {
      toast?.current?.show({
        detail: `فشل الاضافة `,
        life: 3_000,
        severity: 'error',
      });
      queryClient.invalidateQueries({ queryKey: ['getAllTickt'] });
    }
  };

  return (
    <div className="card flex justify-content-center ">
      <Dialog
        footer={
          <div className="flex items-center  gap-5 border border-solid  justify-center px-4 w-[100%]   h-[70px] ">
            <button
              className={`${
                isSubmitting ? 'animate-pulse' : ''
              } lg:px-10  px-6  h-10 lg:h-[40px]    rounded-md cursor-pointer text-sm lg:text-base  font-bold text-white   relative  text-center bg-custom-gradient    z-10 hover:animate-gradient-xy  hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[1px] before:-bottom-[1px] before:-left-[1px] before:-right-[1px] before:bg-gradient-to-r before:from-zinc-500  before:blue-500 before:via-30% before:to-zinc-500 before:bg-[length:400%] before:-z-10 before:rounded-lg before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-blue-500 focus:ring-cyan-500`}
              onClick={handleSubmit(onSubmit)}
              type="submit"
            >
              إضافة
            </button>
            <button
              className="bg-transparent border border-solid border-gray text-black from-zinc-600 to-zinc-800 hover:text-white font-bold py-2 px-4 rounded-md  hover:bg-zinc-700 hover:to-zinc-600 transition ease-in-out duration-150"
              onClick={(event) => {
                event.preventDefault();
                navigate('/dashbord/tickts');
              }}
              type="button"
            >
              إغلاق{' '}
            </button>
          </div>
        }
        header={Header}
        modal
        onHide={() => navigate('/dashbord/tickts')}
        style={{ borderRadius: '20px', maxWidth: '30rem', width: '90%' }}
        visible
      >
        <div className="w-[100%] absolute h-[1px] bg-gray-300 top-20 start-0" />
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex py-5 flex-col gap-5">
            <div className="flex flex-col justify-between mb-10 h-[270px]">
              <div className="flex items-center justify-between  gap-4 flex-wrap md:flex-nowrap ">
                <div className=" h-[70px] w-full">
                  <Controller
                    control={control}
                    defaultValue=""
                    name="title"
                    render={({ field }) => (
                      <FloatinInputLabel
                        errors={errors.title}
                        field={field}
                        labelName="اسم التذكرة"
                        type="text"
                      />
                    )}
                    rules={{
                      required: true,
                      validate: (value: string) => {
                        const regex = /^[\u0600-\u06FF\s]+$/u;
                        if (!regex.test(value))
                          return `الاسم يجب ان يكون بالغة العربية`;
                        return true;
                      },
                    }}
                  />
                  <p className={`${errors.title ? 'text-red-700' : ''}`}>
                    {errors?.title?.message}
                  </p>
                </div>
                <div className="h-[70px] w-full">
                  <Controller
                    control={control}
                    defaultValue=""
                    name="device_name"
                    render={({ field }) => (
                      <FloatinInputLabel
                        errors={errors.device_name}
                        field={field}
                        labelName="اسم الجهاز"
                        type="text"
                      />
                    )}
                    rules={{
                      required: true,
                    }}
                  />
                  <p className={`${errors.device_name ? 'text-red-700' : ''}`}>
                    {errors?.device_name?.message}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between  gap-4 flex-wrap md:flex-nowrap ">
                <div className=" h-[70px] w-full">
                  <Controller
                    control={control}
                    defaultValue=""
                    name="model"
                    render={({ field }) => (
                      <FloatinInputLabel
                        errors={errors.model}
                        field={field}
                        labelName="المودل"
                      />
                    )}
                  />
                </div>
                <div className="h-[70px] w-full">
                  <Controller
                    control={control}
                    defaultValue=""
                    name="serialNumber"
                    render={({ field }) => (
                      <FloatinInputLabel
                        errors={errors.serialNumber}
                        field={field}
                        labelName="السريل نابر"
                      />
                    )}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between  gap-4 flex-wrap md:flex-nowrap ">
                <div className=" h-[70px] w-full">
                  <Controller
                    control={control}
                    defaultValue=""
                    name="description"
                    render={({ field }) => (
                      <FloatinInputLabel
                        errors={errors.description}
                        field={field}
                        labelName="الوصف"
                      />
                    )}
                  />
                </div>
                <div className="h-[70px] w-full">
                  <Controller
                    control={control}
                    defaultValue=""
                    name="created_by"
                    render={({ field }) => (
                      <FloatinInputLabel
                        errors={errors.created_by}
                        field={field}
                        labelName="إنشاء بواسطة"
                        type="text"
                      />
                    )}
                    rules={{
                      required: true,
                    }}
                  />
                  <p className={`${errors.created_by ? 'text-red-700' : ''}`}>
                    {errors?.created_by && <span>The ID of the user who created the ticket. Example: 1

</span>}
                  </p>
                </div>
              </div>
              <div className="h-[70px] w-full">
                  <Controller
                    control={control}
                    defaultValue=""
                    name="status"
                    render={({ field }) => (
                      <FloatinInputLabel
                        errors={errors.status}
                        field={field}
                        labelName="الحالة"
                        type="text"
                      />
                    )}
                    rules={{
                      required: true ,
                    }}
                  />
                  <p className={`${errors.status ? 'text-red-700' : ''}`}>
                    {errors?.status && <span>The status of the ticket. Example: open

</span>}
                  </p>
                </div>
            </div>
          </div>
          <Toast
            pt={{ root: { className: 'w-auto mx-auto' } }}
            ref={toast}
          />
        </form>
      </Dialog>
    </div>
  );
}
