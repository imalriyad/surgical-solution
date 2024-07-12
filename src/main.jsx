import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/Router.jsx';
import MainLayout from './layout/MainLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MainLayout></MainLayout>
   </RouterProvider>
  </React.StrictMode>,
)
