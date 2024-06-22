import { createRoot } from 'react-dom/client';
import App from './01-base/yangshiComponent.js';
import './styles.css';

// define const root
const root = createRoot(document.getElementById('root'));

// render root component
root.render(<App/>);
