import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements
} from "react-router-dom"
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Layout from './Layout.jsx';
import Connect from './Pages/Connect.jsx';
import UserProfile from './Pages/UserProfile.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='connect' element={<Connect />} />
      <Route path='profile' element={<UserProfile />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
