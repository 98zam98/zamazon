import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Theme_button from './Theme_button';

const Head: FC = () => {
  return (
    <header className="App-header">
      <Helmet>
        <title>ZAMAZON</title>
      </Helmet>
      <Link to="/"><h1 className="name">ZAMAZON</h1></Link>
      <div className="theme_buttons">
        <Theme_button theme={"amazon"} />
        <Theme_button theme={"dark"} />
      </div>
    </header>
  )
}

export default Head