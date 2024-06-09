import {  confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

type TableDataType = {
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

export const ActionsColumn = (tableData: TableDataType) => {
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  const onDelete = (rowData: TableDataType) => {
    confirmDialog({
      accept: async () => {
        const { response } = await client.DELETE('/api/tickets/{tickt_id}', {
          params: {
            path: { ProductId: rowData?.id },
          },
          parseAs: 'text',
        });

        if (response.status === 200) {
          toast.current?.show({
            detail: `تم الحذف بنجاح `,
            life: 3_000,
            severity: 'success',
          });
          queryClient.invalidateQueries({ queryKey: ['feedbackTable'] });
        }

        if (response.status !== 200) {
          toast.current?.show({
            detail: `فشل الحذف `,
            life: 3_000,
            severity: 'error',
          });
        }
      },
      header: ` حذف ${name}  `,

      message: `هل انت متاكد من حذف هذه التذكرة `,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <div>
        <svg
          className="cursor-pointer group transition-colors"
          fill="none"
          height="24"
          onClick={() => navigate('edit', { state: tableData })}
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:fill-yellow-500 "
            clipRule="evenodd"
            d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
            fill="#09090b"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <svg
          className="cursor-pointer hover:fill-red-600 transition-colors"
          fill="#09090b"
          height="24"
          onClick={() => onDelete(tableData)}
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
      </div>
      <div>
        <svg
          className="cursor-pointer group transition-colors"
          fill="none"
          height="24"
          onClick={() => navigate('detiles', { state: tableData })}
          viewBox="0 0 28 20"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className=" group-hover:stroke-zinc-300"
            d="M1.97782 10.5834C3.29385 5.46998 8.33248 1.49998 14.007 1.49998C19.6814 1.49998 24.7062 5.46998 26.0222 10.5834"
            stroke="#09090b"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M10.6361 10.1373C10.6361 11.9945 12.1417 13.5 13.9988 13.5C15.856 13.5 17.3616 11.9945 17.3616 10.1373C17.3616 8.28009 15.856 6.77455 13.9988 6.77455C12.1417 6.77455 10.6361 8.28009 10.6361 10.1373Z"
            fill="#09090b"
            stroke="#09090b"
            strokeWidth="2"
          />
          <path
            className="group-hover:fill-zinc-300 group-hover:stroke-zinc-300"
            d="M13.9988 14.5C11.5894 14.5 9.63613 12.5467 9.63613 10.1373C9.63613 7.72781 11.5894 5.77455 13.9988 5.77455C16.4083 5.77455 18.3616 7.72781 18.3616 10.1373C18.3616 12.5467 16.4083 14.5 13.9988 14.5Z"
            stroke="#09090b"
            strokeWidth="2"
          />
        </svg>
      </div>
      <Toast
        pt={{ root: { className: 'w-auto mx-auto' } }}
        ref={toast}
      />
    </div>
  );
};
