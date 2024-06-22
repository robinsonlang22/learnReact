import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';
import App1 from './01-base/01-classComponent.js';
import App2 from './01-base/02-fuctionalComponent.js';

// define const root
const root = createRoot(document.getElementById('root'));

// render component
//root.render(<App/>);
//root.render(<App1></App1>)
root.render(<App2></App2>)