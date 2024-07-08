import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements
} from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx';
import GetConnect from './pages/GetConnect.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='get-connect' element={<GetConnect />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
