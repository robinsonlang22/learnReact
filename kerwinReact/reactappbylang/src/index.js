import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './03-hooks/15-useReducer3';

// define const root
const root = createRoot(document.getElementById('root'));

// render root component
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
