import { Header } from './components/Header';
import { formatDate } from '@/utils/functions/formatDate';
import { Dialog } from 'primereact/dialog';

export function Component() {
  const navigate = useNavigate();
  const { state  } = useLocation();
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header={Header}
        modal
        onHide={() => navigate('/dashbord/tickts')}
        style={{ borderRadius: '20px', maxWidth: '30rem', width: '90%' }}
        visible
      >
        <div className="w-[100%] absolute h-[1px] bg-gray-300 top-20 start-0" />
        <div className="w-full my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  <p className="font-bold text-secondary mb-1">رقم التذكرة</p>
                  <p className="text-gray-700">{state?.id}</p>
                </td>
                <td className="border px-4 py-2">
                  <p className="font-bold text-secondary mb-1">الحالة</p>
                  <p className="text-gray-700">{state?.status}</p>
                </td>
              </tr>
             
             
              <tr>
                <td className="border px-4 py-2">
                  <p className="font-bold text-secondary mb-1">السريل نبر</p>
                  <p className="text-gray-700">{state?.serialNumber}</p>
                </td>
                <td className="border px-4 py-2">
                  <p className="font-bold text-secondary mb-1">الوصف</p>
                  <p className="text-gray-700">{state?.description}</p>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <p className="font-bold text-secondary mb-1">المودل</p>
                  <p className="text-gray-700">{state?.model}</p>
                </td>
                <td className="border px-4 py-2">
                  <p className="font-bold text-secondary mb-1">اسم الجهاز</p>
                  <p className="text-gray-700">{state?.device_name}</p>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <p className="font-bold text-secondary mb-1">إنشاءت بواسطة</p>
                  <p className="text-gray-700">{state?.created_by}</p>
                </td>
                <td className="border px-4 py-2">
                  <p className="font-bold text-secondary mb-1">انشاءت في</p>
                  <p className="text-gray-700">
                    {formatDate(state?.created_at)}
                  </p>
                </td>
              </tr>

              <tr>
                <td
                  className="border px-4 py-2"
                  colSpan={2}
                >
                  <p className="font-bold text-secondary mb-1">تم التحديث في</p>
                  <p className="text-gray-700">
                    {state?.updated_at === null
                      ? '00/00/00'
                      : formatDate(state?.updated_at)}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Dialog>
    </div>
  );
}
