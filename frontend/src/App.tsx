import { FC } from 'react';
import "./App.scss";
import Head from './comp/Head';
import { useAppDispatch, useAppSelector } from './state/hooks';

import { useRoutes } from "react-router-dom";
import Home from './comp/Home';
import ProductScreen from './comp/ProductScreen';
import Footer from './comp/Footer';

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
      {
        zRoutes
      }
      <Footer />
    </div>
  );
}

export default App;
