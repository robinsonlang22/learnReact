import { createRoot } from 'react-dom/client';
import App from './01-base/09-render';

// define const root
const root = createRoot(document.getElementById('root'));

// render root component
root.render(<App/>);
