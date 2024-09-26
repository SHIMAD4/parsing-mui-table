import { createRoot } from 'react-dom/client';
import '@/shared/styles/index.module.scss';
import App from '@/pages/App.tsx';

createRoot(document.getElementById('root')!).render(<App />,);

