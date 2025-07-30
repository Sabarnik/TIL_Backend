import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { SearchProvider } from './context/SearchContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/til"> {/* ✅ CRITICAL */}
      <SearchProvider>
        <App />
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
