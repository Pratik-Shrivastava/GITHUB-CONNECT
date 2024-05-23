import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements
} from "react-router-dom"
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Layout from './Layout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      {/* <Route path='contact' element={<Contact />} /> */}
      {/* <Route path='user/:userid' element={<User />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
