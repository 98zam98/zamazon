import React, { FC } from 'react';
import "./App.scss";
import { useAppDispatch, useAppSelector } from './state/hooks';
import themeSlice from './state/reducer/themeSlice';

const App: FC = () => {
  // this  AppTheme will be used to change the theme of the app  
  // s here is short for state 
  const AppTheme = useAppSelector(s => s.themeState.theme);
  console.log(AppTheme)
  const dispatch = useAppDispatch()
  return (
    <div className={`${AppTheme}_app App`} >
      <header className="App-header">
        <a
          // className="App-link"
          href="/"
        // target="_blank"
        // rel="noopener noreferrer"
        >
          ZAMAZON
        </a>
        <div className="theme_buttons">
          <button className={`amazon_theme_button`} onClick={() => dispatch(themeSlice.actions.amazon())} >amazon</button>
          <button className={`dark_theme_button`} onClick={() => dispatch(themeSlice.actions.dark())} >dark</button>
        </div>
      </header>
      <main>
        list products
      </main>
    </div>
  );
}

export default App;
