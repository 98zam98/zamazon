import axios from 'axios';
import React, { FC, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../state/hooks';
import userSlice from '../state/reducer/userSlice';

const Signin_screen: FC = () => {
  
  // s here is short for state 
  const appuser = useAppSelector(s => s.user);
  const dispatch = useAppDispatch();

  const loc = useLocation();
  const url_redirect = new URLSearchParams(loc.search).get("redirect");
  const redirect = url_redirect ? url_redirect : '/';
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {

      if ((appuser.user as any).name) {
        nav(redirect || '/');
      }
    }, 10);
  }, []);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("")
  return (
    <>
    <Helmet>
      <title>Sign in</title>
    </Helmet>

      <div className='Signin_screen' >
        <form action="submit" onSubmit={
          async (e) => {
            e.preventDefault();
            try {
              const { data } = await axios.post("/api/users/signin", {
                "email": Email,
                "password": Password
              });
              dispatch(userSlice.actions.signin(data));
              nav(redirect || '/');

            } catch (error) {
              alert("invalid");

            }
          }
        } >
          <div className="legend_fieldset">
            <fieldset>
              <legend>What's your email?</legend>
              <input type="email" name="email" id="email" required
                onChange={e => setEmail(e.target.value)
                } />
            </fieldset>
          </div>
          <div className="legend_fieldset">
            <fieldset>
              <legend>What's your password?</legend>
              <input type="password" name="password" id="password" required
                onChange={e => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className='signin_button' >
            <button type="submit">sign in</button>
          </div>

        </form>
        <div className='new_customer' >
          <span>new customer? </span>
          <Link to={`/Signup?redirect=${redirect}`}>create your account</Link>
        </div>
      </div>
    </>
  )
}

export default Signin_screen