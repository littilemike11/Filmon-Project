import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StudentForm from './components/StudentForm.jsx'
import StudentPage from './components/StudentPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/enroll",
    element: <StudentForm />
  },
  {
    path: '/student',
    children: [
      {
        path: '/student/:Name',
        element: <StudentPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
