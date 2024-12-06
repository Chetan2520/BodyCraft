import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import WeightGain from './WeightGain.jsx';
import About from './About.jsx';
import WeightLoss from './WeightLoss.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'weightgain', element: <WeightGain /> },
      { path: 'weightloss', element: <WeightLoss /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: "https://body-craft-de5w.vercel.app/",
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
