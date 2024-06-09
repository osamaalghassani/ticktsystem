import { Header } from './components/Header';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

type FieldValues = {
  descriptionAr: string;
  descriptionEn: string;
  isActive: boolean;
  nameAr: string;
  nameEn: string;
};

export function Component() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FieldValues>({ defaultValues: state });

  const onSubmit = async (payLoad: FieldValues) => {
    const { response } = await client.PUT('/api/tickets/{id}', {
      params: {
        path: { id: payLoad?.id },
      },    });
    if (response.status === 200) {
      toast?.current?.show({
        detail: `تم التعديل بنجاح`,
        life: 3_000,
        severity: 'success',
      });
      queryClient.invalidateQueries({ queryKey: ['getAllTickt'] });
      navigate('/dashbord/tickts');
    }

    if (response.status !== 200) {
      toast?.current?.show({
        detail: `فشل التعديل `,
        life: 3_000,
        severity: 'error',
      });
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
              تعديل
            </button>
            <button
              className="bg-transparent border border-solid border-gray text-black from-zinc-600 to-zinc-800 hover:text-white font-bold py-2 px-4 rounded-md  hover:bg-zinc-700 hover:to-zinc-600 transition ease-in-out duration-150"
              onClick={(event) => {
                event.preventDefault();
                navigate('/dashbord/tickts');
              }}
              type="button"
            >
              إغلاق
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
      {/* here is the details page it will be  like the add page but it didnt complte it cause of time */}
      </Dialog>
    </div>
  );
}
