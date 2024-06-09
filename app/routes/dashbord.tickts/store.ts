import { create } from 'zustand';

type OptionsTable = {
  first: number;
  page?: number;
  rows: number;
  sortField?: string;
  sortOrder?: 0 | 1 | -1 | null | undefined;
};
export type useFeedBackStoreType = {
  actions: {
    changePagination: (options: OptionsTable) => void;
    searchInTable: (pageNumer: string | undefined) => void;
  };

  options: OptionsTable;
  query: string;
};
export const useFeedBackStore = create<useFeedBackStoreType>((set) => ({
  actions: {
    async changePagination(data) {
      console.log(data)
      set({ options: data });
    },
    async searchInTable(data) {
      set({ query: data });
    },
  },
  // state
  options: {
    first: 1,
    page: undefined,
    rows: 10,
    sortField: undefined,
    sortOrder: undefined,
  },

  query: '',
}));
export const { changePagination, searchInTable } =
  useFeedBackStore.getState().actions;

export const useFeedbackQuery = (
  querySearch: string,
  pageNumber: number | undefined,
) => {
  return useQuery({
    queryFn: () => {
      return client.GET('/api/tickets', {
        params: {
          query: {
            page: pageNumber ? pageNumber + 1 : pageNumber,
            query: querySearch,
          },
        },
      });
    },

    queryKey: ['getAllTickt', pageNumber, querySearch],
  });
};
