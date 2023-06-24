import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Home from './pages/Home';
import RoleSelectionPage from './pages/RoleSelection';
import UserRegistration from './pages/UserRegistration';
import ServiceProviderRegistration from './pages/ServiceProviderRegistration';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'userlogin',
      element: <LoginPage />,
    },
    {
      path: 'serviceproviderlogin',
      element: <LoginPage />,
    },
    {
      path: 'home',
      element: <Home />,
    },
    {
      path: 'roleselection',
      element: <RoleSelectionPage />,
    },
    {
      path: 'userregistration',
      element: <UserRegistration />,
    },
    {
      path: 'serviceproviderregistration',
      element: <ServiceProviderRegistration />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
