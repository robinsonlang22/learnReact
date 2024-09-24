// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './07-graphql/01-query';

// define const root
const root = createRoot(document.getElementById('root'));

// render root component
root.render(
  // <StrictMode>
    <App />
  // </StrictMode>
);
