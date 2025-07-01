import Modal from 'react-modal';
import { createRoot } from 'react-dom/client';
import './styles/font.css';
import './styles/variables.css';
import './index.css';
import './styles/datepicker.css';
import App from './App.tsx';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(<App />);
