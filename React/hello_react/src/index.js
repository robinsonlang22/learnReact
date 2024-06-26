import { createRoot } from 'react-dom/client';
import App from './03-hooks/03-useEffect';
import './styles.css';

// define const root
const root = createRoot(document.getElementById('root'));

// render root component
root.render(<App/>);
