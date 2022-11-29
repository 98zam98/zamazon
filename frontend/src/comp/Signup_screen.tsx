import axios from 'axios';
import React, { FC, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../state/hooks';
import userSlice from '../state/reducer/userSlice';

const Signup_screen: FC = () => {

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
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>

      <div className='Signup_screen' >
        <form action="submit" onSubmit={
          async (e) => {
            e.preventDefault();
            if (ConfirmPassword === Password) {

              const newUser = {
                "name": Name,
                "email": Email,
                "password": Password
              };
              console.log(newUser);

              try {
                const { data } = await axios.post("/api/users/signup", newUser);
                dispatch(userSlice.actions.signin(data));
  
                nav(redirect || '/');
  
              } catch (error) {
                alert("invalid");
  
              }

              nav(redirect || '/');
            }
            else {
              alert("not the same password")
            }
          }
        } >
          <div className="legend_fieldset">
            <fieldset>
              <legend>What's your Name?</legend>
              <input type="Name" name="Name" id="Name" required
                onChange={e => setName(e.target.value)
                } />
            </fieldset>
          </div>
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
          <div className="legend_fieldset">
            <fieldset>
              <legend>confirm your password</legend>
              <input type="password" name="ConfirmPassword" id="ConfirmPassword" required
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className='signup_button' >
            <button type="submit">sign up</button>
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

export default Signup_screen