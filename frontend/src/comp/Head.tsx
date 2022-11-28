import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Cart_num from './Cart_num';
import Theme_button from './Theme_button';

const Head: FC = () => {
  return (
    <header className="App-header">
      <Helmet>
        <title>ZAMAZON</title>
      </Helmet>
      <div className='links' >
        <Link to="/"><h1 className="name">ZAMAZON</h1></Link>

        <Link to="/cart">
          <div className="cart_link">
            <h3 className="cart">cart</h3>
            <Cart_num/>
          </div>
        </Link>
      </div>
      <div className="theme_buttons">
        <Theme_button theme={"amazon"} />
        <Theme_button theme={"dark"} />
      </div>
    </header>
  )
}

export default Head