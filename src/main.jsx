import axios from 'axios'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AllApps from './Component/AllApps.jsx'
import AppDetails from './Component/AppDetails.jsx'
import AppNotFoundPage from './Component/AppNotFoundPage.jsx'
import InstalledApps from './Component/InstalledApps.jsx'
import Layout from './Component/Layout.jsx'
import Home from './Home.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/', element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        }
      },

      {
        path: '/apps',
        element: <AllApps />,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        }
      },

      {
        path: "/app/:id",
        element: <AppDetails />,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        }
      },

      {
        path: "*",
        element: <AppNotFoundPage />,
      },

      {
        path: '/installation',
        element: <InstalledApps />,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        }
      },

    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
