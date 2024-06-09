// css imports
import './index.css';
import { queryClient } from './config/query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ClickToComponent } from 'click-to-react-component';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
// js imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider
        value={{
          pt: Tailwind,

          unstyled: true,
        }}
      >
        <RouterProvider router={router} />
        <ClickToComponent />
      </PrimeReactProvider>
    </QueryClientProvider>
  </StrictMode>,
);
