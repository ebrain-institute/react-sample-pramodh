import ReactDOM from 'react-dom/client'
import React, { useEffect, useRef, useState, } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App'
import Dashboard from './Components/Dashboard'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <div> 404 page not found</div>
  },
  {
    path:'/dashboard',
    element: <Dashboard/>,
    children:[
      {
        path:'/dashboard/:profileId',
        element: <Dashboard/>,

      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
