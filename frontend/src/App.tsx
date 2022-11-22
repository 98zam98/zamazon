import React, { FC } from 'react';
import "./App.scss";
import Head from './comp/Head';
import Mainer from './comp/Mainer';
import data from './data';
import { useAppDispatch, useAppSelector } from './state/hooks';
import themeSlice from './state/reducer/themeSlice';

const App: FC = () => {

  // this  AppTheme will be used to change the theme of the app  
  // s here is short for state 
  const AppTheme = useAppSelector(s => s.themeState.theme);
  const dispatch = useAppDispatch()
  // end of state 

  return (
    <div className={`${AppTheme}_app App`} >
      <Head/>
      <Mainer/>
    </div>
  );
}

export default App;
