import React, {FC} from 'react'
import { CaseReducerActions } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import themeSlice , {stateType} from '../state/reducer/themeSlice';

const Head:FC = () => {
  
  // this  AppTheme will be used to change the theme of the app  
  // s here is short for state 
  const AppTheme = useAppSelector(s => s.themeState.theme);
  const dispatch = useAppDispatch()
  // end of state 

  
  return (
    <header className="App-header">
      <a href="/">ZAMAZON</a>
      <div className="theme_buttons">
        <button className={`amazon_theme_button`} onClick={() => dispatch(themeSlice.actions.amazon())} >amazon</button>
        <button className={`dark_theme_button`} onClick={() => dispatch(themeSlice.actions.dark())} >dark</button>
      </div>
    </header>
  )
}

export default Head