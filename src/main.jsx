import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import WeightGain from './WeightGain.jsx';
import ScrollToTop from './ScrolltoTop';
import About from './About.jsx';
import WeightLoss from './WeightLoss.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        {/* <ScrollToTop /> */}
        <App />
      </>
    ),
    children: [
      {
        path: '',
        element: <Home />, // Home rendered for the root path "/"
      },
      {
        path: 'weightgain',
        element: <WeightGain />, // WeightGain rendered for "/weightgain"
      },
      {
        path: 'weightloss',
        element: <WeightLoss />, // WeightGain rendered for "/weightgain"
      },
      {
        path: 'about',
        element: <About />, // WeightGain rendered for "/weightgain"
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="health-and-fitness.us.auth0.com"
    clientId="aIlj2WoZbOs89z7b2HhZ5L0z7HY60rqM"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
