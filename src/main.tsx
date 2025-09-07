import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { CartProvider } from './contexts/CartContext';
import './index.css';
import Footer from './components/footer.tsx';
import Header from './components/header.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Header />
        <App />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
