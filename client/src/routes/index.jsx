import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../layout/Layout';
import About from '../pages/About';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../components/cart/Cart';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import AdminDashboard from '../components/admin/AdminDashboard';
import UserDashboard from '../components/user/UserDashboard';
import { element } from 'prop-types';
import UserManageOrder from '../components/user/UserManageOrder';
import UserManageProfile from '../components/user/UserManageProfile';
import AdminManageUsers from '../components/admin/AdminManageUsers';
import AdminManageOrders from '../components/admin/AdminManageOrders';
import AdminMangeProducts from '../components/admin/AdminMangeProducts';
import AdminManageCategories from '../components/admin/AdminManageCategories';
import AdminRoute from './AdminRoute';
import PortectedRoute from './ProtectdRoute';
import FAQ from '../pages/FAQ';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/signin',
          element: <SignIn />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/faq',
          element: <FAQ />,
        },
        // {
        //   path: '/signout',
        //   element: <Home />,
        // },
        {
          path: '/products/:id',
          element: <ProductDetails />,
        },
        {
          path: '/dashboard/user',
          element: <PortectedRoute />,
          children: [
            {
              path: '',
              element: <UserDashboard />,
              children: [
                {
                  index: true, // This sets the default child route
                  element: <UserManageProfile />, // The component to display by default
                },
                {
                  path: 'profile',
                  element: <UserManageProfile />,
                },
                {
                  path: 'orders',
                  element: <UserManageOrder />,
                },
              ],
            },
          ],
        },
        {
          path: '/dashboard/admin',
          element: <AdminRoute />,
          children: [
            {
              path: '',
              element: <AdminDashboard />, // The parent dashboard element
              children: [
                {
                  index: true, // This sets the default child route
                  element: <AdminManageUsers />, // The component to display by default
                },
                {
                  path: 'users',
                  element: <AdminManageUsers />,
                },
                {
                  path: 'products',
                  element: <AdminMangeProducts />,
                },
                {
                  path: 'categories',
                  element: <AdminManageCategories />,
                },
                {
                  path: 'orders',
                  element: <AdminManageOrders />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
