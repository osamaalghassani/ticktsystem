export const useGetEmployDetailsQuery = () => {
  return useQuery({
    queryFn: async () => {
      return client.GET('/api/Employee/GetEmployee');
    },
    queryKey: ['getEmployDetails'],
  });
};

export const useGetAllCountiesQuery = () => {
  return useQuery({
    queryFn: async () => {
      return client.GET('/api/PublicList/GetAllCounties');
    },
    queryKey: ['getAllCountiesDash'],
  });
};

export const useGetCityQuery = (countieCode: string) => {
  return useQuery({
    enabled: countieCode !== undefined,
    queryFn: async () => {
      return client.GET('/api/PublicList/GetByCode/{code}', {
        params: {
          path: { code: countieCode },
        },
      });
    },
    queryKey: ['getCityDash', countieCode],
  });
};

export const useGetNotificationQuery = () => {
  return useQuery({
    queryFn: async () => {
      return client.GET('/api/Notification/GetByUser');
    },
    queryKey: ['getNotification'],
  });
};

export const useUpdateNotificationQuery = (enable: boolean) => {
  return useQuery({
    enabled: enable,
    queryFn: async () => {
      return client.PUT('/api/Notification/Update');
    },
    queryKey: ['updateNotification'],
  });
};
