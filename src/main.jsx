import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import 'swiper/css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Fonts and icons
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './home/Home.jsx';
import Banner from './home/Banner.jsx';
import Shop from './shop/Shop.jsx';
import Blog from './blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/',
        element: <Banner />,
      },
      {
        path: '/shop',
        element: <Shop/>,
      },
      {
        path: '/blog',
        element: <Blog/>,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
