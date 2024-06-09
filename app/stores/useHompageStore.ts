export const useGetSlidersQuery = () => {
  return useQuery({
    queryFn: async () => {
      return client.GET('/slider');
    },
    queryKey: ['getslider'],
  });
};

export const useGetBrandQuery = () => {
  return useQuery({
    queryFn: async () => {
      return client.GET('/brands');
    },
    queryKey: ['getBraands'],
  });
};

export const useGetCarsQuery = () => {
  return useQuery({
    queryFn: async () => {
      return client.GET('/sliderCard');
    },
    queryKey: ['getProducts'],
  });
};

export const useGetCarDetialsbyIdQuery = (carId: number | null) => {
  return useQuery({
    enabled: carId !== null,
    queryFn: () => {
      return client.GET('/cars/{CarId}', {
        params: {
          path: { CarId: carId },
        },
      });
    },

    queryKey: ['carDetails', carId],
  });
};
