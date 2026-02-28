import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import './App.css'

import DefaultPage from "./views/DefaultPage"
import FirstPage from "./views/FirstPage"
import SecondPage from "./views/SecondPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <DefaultPage/>
      },
      {
        path: "/firstPage",
        element: <FirstPage/>
      },
      {
        path: "/secondPage",
        element: <SecondPage/>
      }
    ]
  }
],
  {
    basename: "/deployTest"
  }
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;