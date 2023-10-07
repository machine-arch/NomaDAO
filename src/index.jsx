import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './styles/global.css';
import PageContent from './components/modules/pageContent/PageContent';
import Product from './components/modules/product/Product';
import Home from './components/modules/home/Home';
import Streaming from './components/modules/streaming/Streaming';
import Error from './components/Error/Error';
import Booking from './components/modules/booking/Booking';
import SingleHotel from './components/modules/singleHotel/SingleHotel';
import HomeContent from './components/modules/homeContent/HomeContent';
import BookingDetailed from './components/modules/booking/BookingDetailed/BookingDetailed.component';
import BookingSubmission from './components/modules/booking/BookingSubmission/BookingSubmission.component';
import Login from './components/Login/Login.component';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main application component
    children: [
      {
        path: '/',
        element: <Home />, // Home component rendered when the path is '/' as known as index element
        children: [
          // {
          //   path: 'BookYourHotel',
          //   element: <Booking />, // Booking component rendered when the path is '/BookYourHotel', it's custom page, so doesn't share same struture as /:pageName
          // },
          // {
          //   path: 'BookYourHotel/:id',
          //   element: <BookingDetailed />,
          // },
          {
            path: 'Home',
            element: <HomeContent />, // HomeContent component rendered when the path is '/Home', it's custom page, so doesn't share same struture as /:pageName
          },
          {
            path: '/',
            element: <HomeContent />, // HomeContent component rendered when the path is '/index.html', for localhost
          },
          {
            path: 'index.html',
            element: <HomeContent />, // HomeContent component rendered when the path is '/index.html', for localhost
          },
          {
            path: ':pagename',
            element: <PageContent />, // PageContent component rendered for dynamic paths, e.g., '/Home', '/Entertainment'
          },
          {
            path: '/submission/:id',
            element: <BookingSubmission />,
          },
          {
            path: '/sign-in',
            element: <Login />,
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
