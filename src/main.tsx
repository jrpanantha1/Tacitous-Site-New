import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router';
import App from './App';
// Fonts are served from this site, so no visitor data goes to Google Fonts.
import '@fontsource/source-sans-3/latin-400.css';
import '@fontsource/source-sans-3/latin-500.css';
import '@fontsource/source-sans-3/latin-600.css';
import '@fontsource/source-sans-3/latin-700.css';
import '@fontsource/source-sans-3/latin-800.css';
import './styles.css';

const container = document.getElementById('root')!;
// VITE_PREVIEW builds use hash URLs so the site can be previewed from any static host path.
const Router = import.meta.env.VITE_PREVIEW ? HashRouter : BrowserRouter;
const app = (
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

// Prerendered pages are hydrated; the dev server renders from scratch.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
