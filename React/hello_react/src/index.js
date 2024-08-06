import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './heima_react/Day4_reactrouter/router';

// define const root
const root = createRoot(document.getElementById('root'));

// render root component
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
