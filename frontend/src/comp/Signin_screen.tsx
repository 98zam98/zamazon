import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Signin_screen: FC = () => {
  const loc =  useLocation();
  const url_redirect = new URLSearchParams(loc.search).get("redirect");
  const redirect = url_redirect?url_redirect: '/';
  return (
    <>
    <div className='Signin_screen' >
      <form action="submit" onSubmit={
        (e) => { e.preventDefault() }
      } >
        <div className="legend_fieldset">
          <fieldset>
            <legend>What's your email?</legend>
            <input type="email" name="email" id="email"  required />
          </fieldset>
        </div>
        <div className="legend_fieldset">
          <fieldset>
            <legend>What's your password?</legend>
            <input type="password" name="password" id="password" required />
          </fieldset>
        </div>
        <div className='signin_button' >
          <button type="submit">sign in</button>
        </div>

      </form>
      <div className='new_customer' >
        <span>new customer? </span>
        <Link to={`/signup?redirect=${redirect}`}>create your account</Link>
      </div>
    </div>
      </>
  )
}

export default Signin_screen