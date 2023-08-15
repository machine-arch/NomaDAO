import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './styles/global.css';
import PageContent from './components/PageContent/PageContent';
import Product from './components/Product/Product';
import Home from './components/Home/Home';
import Streaming from './components/Streaming/Streaming';
import Error from './components/Error/Error';
import Booking from './components/Booking/Booking';
import SingleHotel from './components/SingleHotel/SingleHotel';
import HomeContent from './components/HomeContent/HomeContent';
import AuthMarketplace from './components/modules/marketplace/AuthMarketplace/AuthMarketplace.component';
import MarketplaceHotel from './components/modules/marketplace/MarketplaceHotel/MarketplaceHotel.component';
import MarketplaceAgency from './components/modules/marketplace/MarketplaceAgency/MarketplaceAgency.component';
import DashboardHotel from './components/DashboardHotel/DashboardHotel';
import DashboardAgency from './components/DashboardAgency/DashboardAgency';
import ActiveBalanceHotel from './components/ActiveBalanceHotel/ActiveBalanceHotel';
import ActivebalanceAgency from './components/ActiveBalanceAgency/ActiveBalanceAgency';
import GroupRequestsHotel from './components/GroupRequestsHotel/GroupRequestsHotel';
import ControlPanelHotel from './components/ControlPanelHotel/ControlPanelHotel';
import ControlPanelAgency from './components/ControlPanelAgency/ControlPanelAgency';
import PublishedHotelsAgency from './components/PublishedHotelsAgency/PublishedHotelsAgency';
import MartketPlaceSettings from './components/modules/marketplace/MarketPlaceSettings/MarketPlaceSettings.component';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main application component
    children: [
      {
        path: '/',
        element: <Home />, // Home component rendered when the path is '/' as known as index element
        children: [
          {
            path: 'Marketplace',
            element: <AuthMarketplace />, // Marketplace login/register page
          },
          {
            path: 'BookYourHotel',
            element: <Booking />, // Booking component rendered when the path is '/BookYourHotel', it's custom page, so doesn't share same struture as /:pageName
          },
          {
            path: 'Home',
            element: <HomeContent />, // HomeContent component rendered when the path is '/Home', it's custom page, so doesn't share same struture as /:pageName
          },
          {
            path: 'index.html',
            element: <HomeContent />, // HomeContent component rendered when the path is '/index.html', for localhost
          },
          {
            path: ':pagename',
            element: <PageContent />, // PageContent component rendered for dynamic paths, e.g., '/Home', '/Entertainment'
          },
        ],
      },
      {
        path: '/products/:product',
        element: <Product />, // Product component is used to show single product page
      },
      {
        path: '/streaming/:link',
        element: <Streaming />,
      },
      {
        path: '/hotel/:hotelName',
        element: <SingleHotel />,
      },
      {
        path: '/marketplace/hotel',
        element: <MarketplaceHotel />,
        children: [
          { path: 'Home', element: <DashboardHotel /> },
          { path: 'ActiveBalance', element: <ActiveBalanceHotel /> },
          { path: 'GroupRequests', element: <GroupRequestsHotel /> },
          { path: 'ControlPanel', element: <ControlPanelHotel /> },
          { path: 'Settings', element: <MartketPlaceSettings /> },
        ],
      },
      {
        path: '/marketplace/agency',
        element: <MarketplaceAgency />,
        children: [
          { path: 'Home', element: <DashboardAgency /> },
          { path: 'ActiveBalance', element: <ActivebalanceAgency /> },
          { path: 'PublishedHotels', element: <PublishedHotelsAgency /> },
          { path: 'ControlPanel', element: <ControlPanelAgency /> },
          { path: 'Settings', element: <MartketPlaceSettings /> },
        ],
      },
    ],
  },
  {
    path: '/*',
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
