import { BookAppointments, Home, Confirm } from "./components"
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/booking-appointment",
      element: <BookAppointments/>,
    },
    {
      path: "/thank-you",
      element: <Confirm />
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
