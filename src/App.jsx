
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './Main/LayOut';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Detels from './Pages/Detels/Detels';
import HomeDetels from './Pages/Home/HomeDetels';
import GuessingGame from './Pages/Game/GesingGame';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayOut></LayOut>,
      children: [

        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('https://dummyjson.com/products');
          },
        },
        {
          path: '/detels/:id',
          element: <HomeDetels></HomeDetels>,
          loader: async ({params }) => {
            return fetch(`https://dummyjson.com/products/${params.id}`);
          },
        },
        {
          path:'/about',
          element:<About></About>,
          loader: async () => {
            return fetch('https://dummyjson.com/products/1');
          },

        },
        {
          path:'/services',
          element:<Services></Services>,
          loader: async () => {
            return fetch('https://dummyjson.com/products/search?q=phone');
          },
        },
        {
          path:'/detels',
          element:<Detels></Detels>
        },
        {
          path:'/game',
          element:<GuessingGame></GuessingGame>
        }


      ]
    }
  ])


  return (
    <>
    
    <RouterProvider router={router} ></RouterProvider>
    
    </>
  )
}

export default App
