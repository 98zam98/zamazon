import { FC } from 'react';
import "./App.scss";
import Head from './comp/Head';
import { useAppDispatch, useAppSelector } from './state/hooks';

import { useRoutes } from "react-router-dom";
import Home from './comp/Home';
import ProductScreen from './comp/ProductScreen';
import Footer from './comp/Footer';
import { Helmet } from 'react-helmet-async';
import Missing from './comp/Missing';
import Cart_screen from './comp/Cart_screen';
import Signin_screen from './comp/Signin_screen';

const App: FC = () => {

  // this  AppTheme will be used to change the theme of the app  
  // s here is short for state 
  const AppTheme = useAppSelector(s => s.themeState.theme);
  const dispatch = useAppDispatch()
  // end of state 

  // routing

  let zRoutes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/product/:slug',
      element: <ProductScreen />
    },
    {
      path: '/cart',
      element: <Cart_screen />
    },
    {
      path: '/Signin',
      element: <Signin_screen />
    },
    {
      path: '*',
      element: <Missing />
    }
    // {
    //   path:'/About' ,
    //   element:<About />
    // },
    // {
    //   path:'/Post/*' ,
    //   element:<Context.Provider value={{Post, setPost}} ><PostRoute /></Context.Provider>
    // },
    // {
    //   path:'*' ,
    //   element:<Missing />  
    // } 
  ]);

  return (
    <div className={`${AppTheme}_app App`} >
      <Head />

      <div className="instead_of_Head" >
      </div>


      {
        zRoutes
      }
      <Footer />
    </div>
  );
}

export default App;
