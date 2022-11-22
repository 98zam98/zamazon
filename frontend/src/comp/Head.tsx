import React, { FC } from 'react'
import { Link } from "react-router-dom";
import Theme_button from './Theme_button';

const Head: FC = () => {
  return (
    <header className="App-header">
      <Link to="/">ZAMAZON</Link>
      <div className="theme_buttons">
        <Theme_button theme={"amazon"} />
        <Theme_button theme={"dark"} />
      </div>
    </header>
  )
}

export default Head