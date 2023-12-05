import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/index.scss';

// Création d'un root pour le rendu de l'application (à partir d'un élément HTML)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Injection de l'application dans le DOM
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
