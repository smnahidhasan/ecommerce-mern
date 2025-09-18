import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Routes from './routes';
import { CartProvider } from './context/CartProvider';
import { ProductProvider } from './context/ProductProvider';
import { UserProvider } from './context/UserProvider';
import { AuthProvider } from './context/AuthProvider';

const App = () => {
  return (
    <HelmetProvider>
      <CartProvider>
        <AuthProvider>
          <UserProvider>
            <ProductProvider>
              <Routes />
            </ProductProvider>
          </UserProvider>
        </AuthProvider>
      </CartProvider>
    </HelmetProvider>
  );
};

export default App;
