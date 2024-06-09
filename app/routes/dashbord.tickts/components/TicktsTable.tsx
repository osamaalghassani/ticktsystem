import { changePagination, useFeedbackQuery, useFeedBackStore } from '../store';
import { ActionsColumn, StatusColumn } from '../utils/generator';
import { TicktsTableHeader } from './TicktsTable.Header';
import { formatDate } from '@/utils/functions/formatDate';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useStore } from 'zustand';

export function TicktsTable() {
  const options = useStore(useFeedBackStore, (selector) => selector.options);
  const query = useStore(useFeedBackStore, (selector) => selector.query);
  const { data, isLoading } = useFeedbackQuery(query, options.page);
  return (
    <>
      <TicktsTableHeader />
      <div className=" flex flex-col justify-between rounded-md mx-auto shadow-dark shadow-md bg-white w-[95%]  overflow-hidden">
        <DataTable
          first={options.first}
          lazy
          loading={isLoading}
          onPage={(event) => changePagination(event)}
          paginator
          paginatorTemplate=" PrevPageLink PageLinks NextPageLink  RowsPerPageDropdown"
          pt={{
            paginator: {
              nextPageButton: {
                className:
                  '!min-w-9 !min-h-9 !h-9 !w-9 !rounded-xl hover:shadow-xl transition-shadow	 !bg-custom-gradient focus:shadow-none',
              },
              nextPageIcon: {
                className: 'scale-x-[-1]  text-white',
              },
              pageButton: {
                className:
                  '!min-w-9   bg-slate-200 !min-h-9 !h-9 !w-9  !rounded-xl',
              },
              prevPageButton: {
                className:
                  '!min-w-9 !min-h-9 !h-9 !w-9 !rounded-xl hover:shadow-xl transition-shadow !bg-custom-gradient focus:shadow-none',
              },
              prevPageIcon: {
                className: 'scale-x-[-1]  text-white ',
              },
            },
          }}
          rows={options.rows}
          sortField={options.sortField}
          sortOrder={options.sortOrder}
          stripedRows
          totalRecords={data?.data?.pagination?.totalCount}
          value={data?.data ?? []}
        >
          <Column
            // eslint-disable-next-line react/no-unstable-nested-components
            field="id"
            header="رقم التذكرة"
            pt={{
              bodyCell: { className: 'text-justify text-start' },

              headerCell: {
                className: ' bg-zinc-200 text-zinc-900 rounded-ss-md',
              },
            }}
          />

          <Column
            field="title"
            header="العنوان"
            pt={{
              bodyCell: { className: 'text-justify text-start' },
              headerCell: { className: ' bg-zinc-200 text-zinc-900' },
            }}
          />
             <Column
            body='status'
            header="الحالة"
            pt={{
              bodyCell: { className: 'text-justify text-start' },
              headerCell: { className: ' bg-zinc-200 text-zinc-900 ' },
            }}
          />
          <Column
            body={(tableData) => formatDate(tableData?.created_at)}
            header="تاريخ الانشاء"
            pt={{
              bodyCell: { className: 'text-justify text-start' },
              headerCell: { className: ' bg-zinc-200 text-zinc-900' },
            }}
          />

       
          <Column
            body={ActionsColumn}
            pt={{
              bodyCell: { className: 'text-justify text-start' },
              headerCell: {
                className: ' bg-zinc-200 text-zinc-900 rounded-se-md',
              },
            }}
          />
        </DataTable>
      </div>
    </>
  );
}
