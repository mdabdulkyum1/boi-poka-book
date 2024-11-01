import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "listed-books",
        element:<ListedBooks></ListedBooks> ,
      },
      {
        path:"/book-details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('booksData.json'),
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} /> 
  </StrictMode>,
)
