import React from 'react';
import './App.css';
import ProductListFilter from './features/ProductList/ProductListFilter';
import HomePage from './Pages/Home';
import {
  RouterProvider,
  Route,
  Link,
  createBrowserRouter
} from "react-router-dom"
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import { Cart } from './features/Cart/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage></HomePage>
    },
    {
      path:'/login',
      element:<LoginPage />
    },
    {
      path:'/signup',
      element:<SignupPage></SignupPage>
    },
    {
      path:'/cart',
      element:<Cart></Cart>
    }
   ])
  return (
    
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router}></RouterProvider>
      </header>
    </div>
  );
}

export default App;
